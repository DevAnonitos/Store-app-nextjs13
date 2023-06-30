"use client";

import React from 'react';

import { motion } from 'framer-motion';

const loaderVariants = {
    loading: { scale: 1.2, opacity: 1 },
    hidden: { scale: 0.8, opacity: 0 },
};

const Loading = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <motion.svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    variants={loaderVariants}
                    animate="loading"
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        yoyo: Infinity,
                    }}
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                        stroke="#9747FF"
                        strokeLinecap="round"
                    /> 
                </motion.svg>
            </div>
        </>
    );
};

export default Loading;
