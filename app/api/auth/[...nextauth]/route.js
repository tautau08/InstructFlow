import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from '@utils/database';
import User from "@models/user";

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email  // Changed from "Email" to "email"
            });

            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
                
                // Check if user exists
                const userExists = await User.findOne({
                    email: profile.email  // Changed from "Email" to "email"
                });
                
                // Create user if doesn't exist
                if (!userExists) {
            // Generate a valid username
            let username = profile.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            
            // Ensure minimum length of 8 characters
            if (username.length < 8) {
                username = username + Math.random().toString(36).substring(2, 10);
            }
            
            // Ensure maximum length of 20 characters
            if (username.length > 20) {
                username = username.substring(0, 20);
            }
            
            // Check if username exists and make it unique
            let finalUsername = username;
            let counter = 1;
            while (await User.findOne({ username: finalUsername })) {
                finalUsername = username.substring(0, 17) + counter.toString().padStart(3, '0');
                counter++;
            }
            
            await User.create({
                email: profile.email,
                username: finalUsername,
                image: profile.picture
            });
        }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };