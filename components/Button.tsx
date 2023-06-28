import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    leftIcon?: string | null,
    rightIcon?: string | null,
    handleClick?: MouseEventHandler,
    submitting?: boolean | false,
    type?: 'button' | 'submit',
    bgColor?: string,
    textColor?: string,
};

const Button = ({
    title,
    leftIcon,
    rightIcon,
    handleClick,
    submitting,
    type,
    bgColor,
    textColor,
}: Props) => {
    return (
        <div>Button</div>
    );
};

export default Button;
