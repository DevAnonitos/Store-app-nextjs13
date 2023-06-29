"use client";

import React, { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;


const AuthProviders = () => {

    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {

        const fetchProviders = async () => {
            const res = await getProviders();

            console.log(res);

            setProviders(res);
        };

        fetchProviders();

    }, []);

    if(providers) {
        return (
            <>
                <div>
                    {Object.values(providers).map((provider: Provider, i) => (
                        <Button
                            key={i}
                            title='SignIn'
                            handleClick={() => signIn(provider?.id)}
                        />
                    ))}
                </div>
            </>
        );
    };
};

export default AuthProviders;
