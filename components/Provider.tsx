"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
    session: any | null;
    children: React.ReactNode | null;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
    return (
        <>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </>
    );
};

export default Provider;
