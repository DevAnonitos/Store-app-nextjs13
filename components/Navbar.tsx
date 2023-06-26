import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/constant';


// Components
import AuthProviders from './AuthProviders';
import Button from './Button';
import ProfileMenu from './ProfileMenu';


const Navbar = async () => {
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
                            className='cursor-pointer object-contain border-2'
                        />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
