import React from 'react'
import { redirect } from 'next/navigation';
import { Modal, ProjectForm } from '@/components';
import { useSession } from 'next-auth/react';
import { SessionInterface } from '@/common.types';

const CreateProject = async () => {

    const { data: session } = useSession();
    console.log(session);

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
                    session={session as SessionInterface}
                />
            </Modal>
        </>
    );
};

export default CreateProject;
