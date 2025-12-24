import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-100 text-black hover:bg-gray-200",
        outline: "border border-gray-300 text-black hover:bg-gray-50",
        ghost: "bg-transparent text-black hover:bg-black/5"
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
