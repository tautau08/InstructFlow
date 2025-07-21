"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react" // ✅ ADDED useRef import
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    const { data: session } = useSession();
    const [providers, setproviders] = useState(null)
    const [toggleDropped, settoggleDropped] = useState(false) // ✅ MOVED before useEffect
    const dropdownRef = useRef(null); // ✅ ADDED dropdownRef declaration

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setproviders(response);
        }
        setUpProviders();
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                settoggleDropped(false);
            }
        };

        // Add event listener when dropdown is open
        if (toggleDropped) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleDropped]);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg"
                    alt="Intrucflow"
                    width={30}
                    height={30}
                    className="object-contain"
                />  
                <p className="logo_text">Instructflow</p>
            </Link>

            {/*for desktop navigation*/} 
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create_prompt" className="black_btn">
                            Create Post
                        </Link>
                        
                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>
                        
                        <Link href="/profile">
                            <Image src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" 
                                key={provider.name}
                                onClick={() => signIn(provider.id)} 
                                className="black_btn">
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/*mobile navigation*/}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div ref={dropdownRef}> {/* ✅ ADDED ref={dropdownRef} */}
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full cursor-pointer"
                            alt="profile"
                            onClick={() => settoggleDropped((prev) => !prev)}
                        />

                        {toggleDropped && ( // ✅ CHANGED from ternary to logical AND
                            <div className="dropdown">
                                <Link 
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropped(false)}>
                                    My Profile
                                </Link>
                                
                                <Link 
                                    href="/create_prompt"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropped(false)}>
                                    Create Prompt {/* ✅ FIXED typo: "Promt" to "Prompt" */}
                                </Link>

                                <button 
                                    type="button" 
                                    onClick={() => { // ✅ ADDED settoggleDropped to signOut
                                        signOut();
                                        settoggleDropped(false);
                                    }} 
                                    className="black_btn">
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" 
                                key={provider.name}
                                onClick={() => signIn(provider.id)} 
                                className="black_btn">
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav