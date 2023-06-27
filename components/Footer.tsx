"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import FormattedDate from './FormattedDate';

import { footerLinks } from '@/constant';

type ColumProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumProps) => (
    <>
        <div className='footer_column'>
            <h4 className='font-semibold text-lg'>
                {title}
            </h4>
            <ul className='flex flex-col gap-2 font-normal'>
                {links.map((link) => (
                    <Link
                        href="/"
                        key={link}
                        className='hover:underline'
                    >
                        {link}
                    </Link>
                ))}
            </ul>
        </div>
    </>
);

const Footer = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className='flexStart footer'>
                <div className='flex flex-col gap-12 w-full'>
                    <div className='flex items-start flex-col'>
                        <Link href="/">
                            <Image
                                src="/next.svg"
                                width={116}
                                height={38}
                                alt='logo'
                                priority
                            />
                        </Link>

                        <p className="text-start text-sm font-normal mt-5 max-w-xs">
                            Flexibble is the world&apos;s leading community
                            for creatives to share, grow, and get hired.
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-12'>
                        <FooterColumn
                            title={footerLinks[0].title}
                            links={footerLinks[0].links}
                        />

                        <div className='flex-1 flex-col gap-4'>
                            <FooterColumn
                                title={footerLinks[1].title}
                                links={footerLinks[1].links}
                            />
                            <FooterColumn
                                title={footerLinks[2].title}
                                links={footerLinks[2].links}
                            />
                        </div>

                        <FooterColumn
                            title={footerLinks[3].title}
                            links={footerLinks[3].links}
                        />

                        <div className='flex-1 flex-col gap-4'>
                            <FooterColumn
                                title={footerLinks[4].title}
                                links={footerLinks[4].links}
                            />
                            <FooterColumn
                                title={footerLinks[5].title}
                                links={footerLinks[5].links}
                            />
                        </div>

                        <FooterColumn
                            title={footerLinks[6].title}
                            links={footerLinks[6].links}
                        />
                    </div>
                </div>

                <div className='flexBetween footer_copyright'>
                    <p className='font-medium text-md'>
                        @ 2023 NguyenBao. All rights reserved
                    </p>
                    <p className="text-violet-600 font-semibold text-md">
                        <FormattedDate date={currentDate} />
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;
