"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormField from './FormField';
import Button from './Button';
import { categoryFilters } from '@/constant';
import { FormState, ProjectInterface, SessionInterface } from '@/common.types';
import CustomMenu from './CustomMenu';

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
        setSubmitting(true);

        try {
            if(type === 'create') {

                toast.success("Create Post successfully");
                router.push("/");
            }

            if(type === 'edit') {

                toast.success("Update Post successfully");
                router.push("/");
            }
        } catch (error: any) {

        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className='flexStart form'
            >
                <div className='flexStart form_image-container'>
                    <label
                        htmlFor="poster"
                        className='flexCenter form_image-label rounded-xl font-semibold'
                    >
                        {!form.image && 'Choose a poster for your project'}
                    </label>
                    <input
                        id='input'
                        type='file'
                        accept='image'
                        required={type === 'create' ? true : false}
                        className='form_image-input'
                        onChange={(e) => handleChangeImage(e)}
                    />
                    {form.image && (
                        <Image
                            src={form?.image}
                            className='sm:p-10 object-contain z-20'
                            alt='ImageUpload'
                            fill
                        />
                    )}
                </div>

                <FormField
                    title='Title'
                    state={form.title}
                    placeholder='StoreApp'
                    setState={(value) => handleStateChange('title', value)}
                />

                <FormField
                    title='Description'
                    state={form.description}
                    placeholder='Showcase and discover remarkable your projects.'
                    isTextArea
                    setState={(value) => handleStateChange('description', value)}
                />

                <FormField
                    type='url'
                    title='Your WebsiteUrl'
                    state={form.liveSiteUrl}
                    placeholder='https://example.com'
                    setState={(value) => handleStateChange('liveSiteUrl', value)}
                />

                <FormField
                    type='url'
                    title='GitHub Url'
                    state={form.githubUrl}
                    placeholder='https://github.com/NguyenBao23131'
                    setState={(value) => handleStateChange('githubUrl', value)}
                />

                <CustomMenu
                    title='Category'
                    state={form.category}
                    filters={categoryFilters}
                    setState={(value) => handleStateChange('category', value)}
                />

                <div className='flexCenter w-full'>
                    <Button
                        title={submitting ?
                            `${type === "create"
                                ? "Creating"
                                : "Editing"
                            }`
                                :
                            `${type === "create"
                                ? "Create"
                                : "Edit"
                            }`
                        }
                        type='submit'
                        leftIcon={submitting ? "" : "/plus.svg"}
                        submitting={submitting}
                    />
                </div>
            </form>
        </>
    );
};

export default ProjectForm;
