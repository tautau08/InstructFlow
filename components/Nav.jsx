"use client"
import Link from "next/link"

import Image from "next/image"
import { useState,useEffect } from "react"
import{signIn,signOut,useSession,getProviders} from "next-auth/react"
const Nav = () => {
      const isUserLoggedIn = true;

      const [providers, setproviders] = useState(null)

      useEffect(()=>{
        const setProviders= async ()=>{
            const response= await getProviders();
            setProviders(response);
        }
        setProviders();
      })

const [toggleDropped, settoggleDropped] = useState(false)      
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
            {isUserLoggedIn ? (<div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" 
            className="black_btn">
                Create Post
            </Link>
            
           <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
           </button>
           <Link href="/profile">
            <Image src="\assets\icons\account_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
            />
           </Link>
             </div>) : (<>
                {providers && Object.values(providers).map((provider)=>
                (
                    <button type="button" 
                    key={provider.name}
                    onClick={()=>signIn(provider.id)} 
                    className="black_btn">
                        Sign In
                    </button>
                ))}
             </>)}
                
        </div>

    {/*mobile navigation*/}
    <div className="sm:hidden flex relative">
    {isUserLoggedIn ? (<div>
        <Image
            src="\assets\icons\account_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={()=>settoggleDropped((prev)=> !prev)}
         />

        {toggleDropped?(<div className="dropdown">
            <Link 
            href="/profile"
            className="dropdown_link"
            onClick={()=>settoggleDropped(false)}>
            My Profile
            </Link>
            
            <Link 
            href="/profile"
            className="dropdown_link"
            onClick={()=>settoggleDropped(false)}>
            Create Promt
            </Link>

            <button type="button" onClick={signOut} className="black_btn">
            Sign Out
           </button>
            
        </div>):(<> </>)}

           
    </div>):(<>
                {providers && Object.values(providers).map((provider)=>
                (
                    <button type="button" 
                    key={provider.name}
                    onClick={()=>signIn(provider.id)} 
                    className="black_btn">
                        Sign In
                    </button>
                ))}
             </>)

    }
    </div>
    </nav>
  )
}

export default Nav