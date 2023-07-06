import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from './Button';
import ProjectCard from './ProjectCard';
import { ProjectInterface, UserProfile } from '@/common.types';

type Props = {
    user: UserProfile;
}

const ProfilePage = ({ user }: Props) => {


    return (
        <>
            <section
                className='flexCenter flex-col max-w-10xl
                w-full mx-auto paddings'
            >
                <section className='flexBetween max-lg:flex-col gap-10 w-full'>
                    <div className='flex items-start flex-col w-full'>
                        <Image
                            src={user?.avatarUrl}
                            width={100}
                            height={100}
                            className='rounded-full'
                            alt='UserImage'
                        />

                        <p className='text-4xl font-bold mt-10'>
                            {user?.name}
                        </p>
                        <p
                            className='md:text-5xl text-3xl
                            font-extrabold md:mt-10 mt-5 max-w-lg'
                        >
                            I’m Software Engineer at Big4Tech 👋
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
};

export default ProfilePage;
