"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
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
            setIsDark(v > 0.4);
            setCtaText(v > 0.4 ? "Partner with IntuitiveX" : "Book Consultation");
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-[95%] md:max-w-[85%] lg:max-w-[80%]"
            >
                <div className={cn(
                    "backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between shadow-2xl transition-all duration-500 border",
                    isDark
                        ? "bg-executive-navy/90 text-white border-white/5"
                        : "bg-clinical-white/90 text-executive-navy border-executive-navy/5"
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
                                    "text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
                                    isDark ? "hover:text-gold-foil text-gray-400" : "hover:text-proliance-blue text-text-grey"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button className={cn(
                            "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                            isDark
                                ? "border border-gold-foil text-gold-foil hover:bg-gold-foil hover:text-executive-navy"
                                : "bg-proliance-blue text-white hover:bg-executive-navy shadow-lg"
                        )}>
                            {ctaText}
                        </button>
                    </div>

                    <button
                        className={cn("md:hidden", isDark ? "text-white" : "text-executive-navy")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
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
