"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/constant';
import { useSession } from 'next-auth/react';

// Components
import AuthProviders from './AuthProviders';
import Button from './Button';
import ProfileMenu from './ProfileMenu';

const Navbar = async () => {

    const session  = null;

    return (
        <>
            <nav className='flexBetween navbar'>
                <div className='flex-1 flexStart gap-10'>
                    <Link href="/">
                        <Image
                            src="/next.svg"
                            width={116}
                            height={43}
                            alt='LogoApp'
                            priority
                            className='cursor-pointer object-contain border-2'
                        />
                    </Link>
                    <ul className='xl:flex hidden text-small gap-7'>
                        {NavLinks.map((link) => (
                            <Link
                                key={link.text}
                                href={link.href}
                                className='border-2 px-3 py-2
                                rounded-lg hover:shadow-md antialiased
                                hover:subpixel-antialiased font-semibold
                                hover:bg-[#c56cf0] hover:text-white
                                transition-all ease-in-out duration-300'
                            >
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className='flexCenter gap-4'>
                    {session ? (
                        <>
                            <ProfileMenu

                            />
                            <Link href="/create-project">
                                <Button title='Share Work' />
                            </Link>
                        </>
                    ) : (
                        <>
                            <AuthProviders />
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
