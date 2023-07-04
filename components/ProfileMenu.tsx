"use client";

import React, { Fragment, use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';

import { SessionInterface } from '@/common.types';

const ProfileMenu = (
    { session }: { session: SessionInterface }
) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='flexCenter z-10 flex-col relative'>
                <Menu as="div">
                    <Menu.Button
                        className="flexCenter"
                        onMouseEnter={() => setOpenModal(true)}
                    >
                        {session?.user?.image && (
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                className='rounded-full object-contain ring-2'
                                alt='UserProfileImage'
                            />
                        )}
                    </Menu.Button>

                    <Transition
                        show={openModal}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="flexStart profile_menu-items"
                            onMouseLeave={() => setOpenModal(false)}
                        >
                            
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
};

export default ProfileMenu;
