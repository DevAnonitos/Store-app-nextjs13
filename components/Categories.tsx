"use client";

import React from 'react';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';
import { categoryFilters } from '@/constant';

const Categories = () => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    const handleTags = (item: string) => {
        router.push(`${pathName}?category=${item}`);
    };

    return (
        <>
            <div className='flexBetween w-full gap-5 flex-wrap'>
                <div className='flex gap-2 overflow-auto scroll-smooth touch-auto'>
                    {categoryFilters.map((filter) => (
                        <button
                            key={filter}
                            type='button'
                            onClick={() => handleTags(filter)}
                            className={`${
                                category === filter
                                ? "bg-light-white-300 font-medium"
                                : "font-normal"
                            } px-4 py-3 rounded-full capitalize whitespace-nowrap`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categories;
