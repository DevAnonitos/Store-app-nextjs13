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

    const onDismiss = useCallback(() => {
        router.push("/");
    }, [router]);

    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target === overplay.current) && onDismiss) {
            onDismiss();
        }
    }, [onDismiss, overplay]);

    return (
        <>
            <div
                ref={overplay}
                className="modal"
                onClick={(e) => handleClick(e)}
            >
                <button
                    type="button"
                    onClick={onDismiss}
                    className="absolute top-4 right-8"
                >
                    <Image
                        src="/close.svg"
                        width={22}
                        height={22}
                        alt="Close"
                        className="rounded-full"
                    />
                </button>

                <div ref={wrapper} className="modal_wrapper">
                    {children}
                </div>
            </div>
        </>
    );
};
