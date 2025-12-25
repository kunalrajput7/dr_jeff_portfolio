"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#clinical", label: "Clinical" },
    { href: "#contact", label: "AI Companion" },
    { href: "#about", label: "Origin" },
    { href: "#bridge", label: "The Bridge" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const [isDark, setIsDark] = useState(false);
    const [ctaText, setCtaText] = useState("Book Consultation");

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setIsDark(v > 0.1);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.9, 0.1]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["rgba(248, 249, 250, 0.9)", "rgba(248, 249, 250, 0.1)"]
    );

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-[95%] md:max-w-[85%] lg:max-w-[80%]"
            >
                <motion.div
                    style={{ backgroundColor }}
                    className={cn(
                        "backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between shadow-2xl transition-all duration-500 border",
                        isDark
                            ? "text-executive-navy border-executive-navy/10"
                            : "text-executive-navy border-executive-navy/5"
                    )}>
                    <Link href="/" className="font-serif font-black tracking-tight text-xl lg:text-2xl">
                        DR. JEFFREY ROH
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.2em] transition-colors relative group overflow-hidden h-4",
                                    isDark ? "hover:text-black text-text-grey" : "hover:text-proliance-blue text-text-grey"
                                )}
                            >
                                <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2">
                                    <span className="flex items-center h-4">{link.label}</span>
                                    <span className="flex items-center h-4">{link.label}</span>
                                </div>
                            </Link>
                        ))}

                        <button className={cn(
                            "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 bg-black text-white hover:bg-black/80 shadow-lg"
                        )}>
                            {ctaText}
                        </button>
                    </div>

                    <button
                        className={cn("md:hidden text-executive-navy")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-executive-black/95 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <button
                            className="absolute top-8 right-8 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col items-center gap-12 text-center w-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-4xl font-serif text-white hover:text-gold-foil"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button className="mt-8 px-10 py-4 bg-proliance-blue text-white rounded-full font-bold uppercase tracking-widest w-full max-w-xs shadow-xl">
                                {ctaText}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
