
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { ProjectInterface } from '@/common.types';
import { Modal, ProjectActions, RelatedProjects} from '@/components';


const Project = async () => {
    return (
        <>
            <Modal>
                <section
                    className='flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full'
                >
                    <div className='flex-1 flex items-start gap-5 w-full max-xs:flex-col'>
                        <Link
                            href="/"
                        >
                            
                        </Link>
                    </div>
                </section>
            </Modal>
        </>
    );
};

export default Project;
