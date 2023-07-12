import React from 'react'
import { redirect } from 'next/navigation';
import { Modal, ProjectForm } from '@/components';
import { useSession } from 'next-auth/react';
import { SessionInterface } from '@/common.types';
import { getCurrentUser } from '@/libs/session';

const CreateProject = async () => {

    const session = await getCurrentUser();
    console.log(session.user);

    if(!session?.user) {
        redirect("/");
    }

    return (
        <>
            <Modal>
                <h3 className='modal-head-text'>
                    Create a New Project
                </h3>

                <ProjectForm
                    type='create'

                />
            </Modal>
        </>
    );
};

export default CreateProject;
