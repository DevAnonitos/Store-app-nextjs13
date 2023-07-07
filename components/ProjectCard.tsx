"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({
    id,
    image,
    title,
    name,
    avatarUrl,
    userId
}: Props) => {

    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {

        setRandomLikes(Math.floor(Math.random() * 1000000));
        setRandomViews(String((Math.floor(Math.random() * 1000000) / 10000).toFixed(1)+ 'k'));
    }, []);


    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flexCenter flex-col rounded-2xl drop-shadow-card'
            >
                <Link
                    href={`/projects/${id}`}
                    className='flexCenter group relative w-full h-full'
                >
                    <Image
                        src="/logo.svg"
                        width={414}
                        height={314}
                        className='w-full h-full object-cover rounded-2xl'
                        alt='ProjectImage'
                    />

                    <div className='hidden group-hover:flex profile_card-title'>
                        <p className='w-full'>
                            {title}
                        </p>
                    </div>
                </Link>

                <div className='flexBetween w-full gap-2 mt-3 font-semibold text-sm'>
                    <Link
                        href={`/profiles/${userId}`}
                    >
                        <div className='flexCenter gap-2'>
                            <Image
                                src="/logo.svg"
                                width={24}
                                height={24}
                                className='rounded-full ring-2'
                                alt='ProfileImage'
                            />
                            <p>
                                {name}
                            </p>
                        </div>
                    </Link>

                    <div className='flexCenter gap-3'>
                        <div className='flexCenter gap-2'>
                            <Image
                                src="/hearth.svg"
                                width={15}
                                height={14}
                                alt='Heart'
                            />
                            <p className='text-sm'>
                                {randomLikes}
                            </p>
                        </div>
                        <div className='flexCenter gap-2'>
                            <Image
                                src="/eye.svg"
                                width={12}
                                height={9}
                                alt='eye'
                            />
                            <p className='text-sm'>
                                {randomViews}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectCard;
