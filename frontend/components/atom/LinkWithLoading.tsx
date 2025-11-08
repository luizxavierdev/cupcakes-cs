"use client";

import { useTransition } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useGlobalLoading } from "@/contexts/loading-context";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export function LinkWithLoading({ href, children, className, ...props }: any) {
    const router = useRouter();
    const { setLoading } = useGlobalLoading();
    const [isPending, startTransition] = useTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        startTransition(() => {
            router.push(href);
        });
    };

    return (
        <Link href={href} legacyBehavior>
            <a href={href} onClick={handleClick} className={className} {...props}>
                {children}
            </a>
        </Link>
    );
}
