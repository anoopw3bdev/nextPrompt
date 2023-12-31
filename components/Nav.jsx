"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getAndSetProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    getAndSetProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-6 sticky top-0 z-20 bg-white">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width="40"
          height="50"
          className="object-contain"
          alt="my prompts logo"
        />
        <p className="logo_text">My prompts</p>
      </Link>
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="create-prompt" className="black_btn">
            Create prompt
          </Link>
          <Link href="profile" className="black_btn">
            Profile
          </Link>
          <button className="outline_btn" onClick={signOut}>
            Sign out
          </button>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="outline_btn"
                >
                  Sign in
                </button>
              );
            })}
        </>
      )}
    </nav>
  );
};

export default Nav;
