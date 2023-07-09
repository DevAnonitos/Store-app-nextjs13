
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectInterface, UserProfile } from '@/common.types';

type Props = {
    userId: string;
    projectId: string;
}

const RelatedProjects = ({ userId, projectId }: Props) => {
    return (
        <>
            <section className='flex flex-col mt-32 w-full'>
                <div className='flexBetween'>
                    <p className='text-base font-bold'>
                        More by {" "}
                    </p>
                    <Link
                        href={`/profile`}
                        className="text-primary-purple text-base"
                    >
                        View All
                    </Link>

                    <div className='related_project-grid'>
                        {}
                    </div>
                </div>
            </section>
        </>
    );
};

export default RelatedProjects;
