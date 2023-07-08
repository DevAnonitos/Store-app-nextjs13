"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import FormField from './FormField';
import Button from './Button';
import { categoryFilters } from '@/constant';
import { FormState, ProjectInterface, SessionInterface } from '@/common.types';

type Props = {
    type: string,
    session: SessionInterface,
    project?: ProjectInterface,
}

const ProjectForm = ({
    type,
    session,
    project
}: Props) => {

    const router = useRouter();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({
        title: project?.title || "",
        description: project?.description || "",
        image: project?.image || "",
        liveSiteUrl: project?.liveSiteUrl || "",
        githubUrl: project?.githubUrl || "",
        category: project?.category || "",
    });

    const handleStateChange = (fieldName: keyof FormState, value: string) => {

    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {

        } catch (error) {

        } finally {
            
        }
    };

    return (
        <>

        </>
    );
};

export default ProjectForm;
