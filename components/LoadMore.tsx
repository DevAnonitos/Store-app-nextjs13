"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

type Props = {
    startCursor: string;
    endCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
};

const LoadMore = ({
    startCursor,
    endCursor,
    hasPreviousPage,
    hasNextPage,
}: Props) => {

    const router = useRouter();

    const handleNavigation = (type: string) => {
        router.push("");
    };

    return (
        <>
            <div className='w-full flexCenter gap-5 mt-10'>
                {hasPreviousPage && (
                    <Button
                        title='First Page'
                        handleClick={() => handleNavigation('prev')}
                    />
                )}
                {hasNextPage && (
                    <Button
                        title='Next shots'
                        handleClick={() => handleNavigation('next')}
                    />
                )}
                LoadingMore
            </div>
        </>
    );
};

export default LoadMore;
