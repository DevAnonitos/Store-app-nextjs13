import React from 'react'
import { redirect } from 'next/navigation';
import { Modal, ProjectForm } from '@/components';


const CreateProject = async () => {

    const session = {};

    if(!session) {
        redirect("/");
    }

    return (
        <>
            <Modal>
                <h3 className='modal-head-text'>
                    Create a New Project
                </h3>

                <ProjectForm />
            </Modal>
        </>
    );
};

export default CreateProject;
