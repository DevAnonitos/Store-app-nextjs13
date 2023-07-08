"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type Props = {
    projectId: string;
};

const ProjectActions = ({ projectId }: Props) => {

    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const router = useRouter();

    const handleDeleteProject = async () => {
        setIsDeleting(true);

        try {

            toast.success('🦄 Delete project is successfully!');
            router.push("/");
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <Link
                href={`/edit-project/${projectId}`}
                className='flexCenter edit-action_btn'
            >
                <Image
                    src="/pencile.svg"
                    width={15}
                    height={15}
                    alt='EditImage'
                />
            </Link>

            <button
                type="button"
                disabled={isDeleting}
                className={`
                    flexCenter
                    delete-action_btn
                    ${isDeleting
                        ? "bg-gray"
                        : "bg-primary-purple"
                    }`
                }
                onClick={handleDeleteProject}
            >
                <Image
                    src="/trash.svg"
                    width={15}
                    height={15}
                    alt="delete"
                />
            </button>
        </>
    );
};

export default ProjectActions;
