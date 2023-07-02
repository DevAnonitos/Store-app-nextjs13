"use client";

import React, { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Modal ({ children }: {
    children: ReactNode
}) {

    const overplay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();

    return (
        <>
            Modal
        </>
    );
};
