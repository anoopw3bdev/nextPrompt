"use client"

import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";
import { useSession, signOut, signIn, getProviders} from "next-auth/react"



const Nav = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getAndSetProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    getAndSetProviders()
  }, [])

  const isLoggedIn = false;
  return (
    <nav className="flex-between w-full mb-16 pt-6">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo.svg"
                width="40"
                height="50"
                className="object-contain"
            />
            <p className="logo_text">My prompts</p>
        </Link>

        {isLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link 
                    href="create-prompt"
                    className="black_btn">
                        Create prompt
                </Link>
                <button
                    className="outline_btn"
                    onClick={signOut}
                >
                    Sign out
                </button>
            </div>
        )
        : (
            <>
            {
            providers && 
            Object.values(providers).map(provider => {
                return(
                    <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="outline_btn"
                    >
                        Sign in
                    </button>
                )
            })
            }
            </>
        )
        }
    </nav>
  )
}

export default Nav