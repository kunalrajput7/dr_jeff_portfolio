import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn("bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-2xl overflow-hidden", className)}
            {...props}
        >
            {children}
        </div>
    );
}
