"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-executive-black">
            <div className="flex h-full w-full flex-col md:flex-row">
                {/* Left Side: The Surgeon */}
                <motion.div
                    className={cn(
                        "relative flex h-1/2 flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out md:h-full",
                        hoveredSide === "left" ? "md:w-[60%]" : hoveredSide === "right" ? "md:w-[40%] opacity-50" : "md:w-1/2",
                        "bg-clinical-white"
                    )}
                    onMouseEnter={() => setHoveredSide("left")}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="relative z-10 text-center md:text-left">
                        <motion.h2
                            className="font-serif text-5xl font-light text-executive-navy md:text-8xl lg:text-9xl"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Restoring <br />
                            <span className="italic">Motion.</span>
                        </motion.h2>
                        <motion.p
                            className="mt-6 font-sans text-xs font-black uppercase tracking-[0.3em] text-proliance-blue"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                        >
                            Surgical Excellence
                        </motion.p>
                    </div>

                    {/* Placeholder for Surgeon Image */}
                    {/* Surgeon Background Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            className="relative h-full w-full"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src="/jef1.jpg"
                                alt="Dr. Jeffrey Roh - Surgeon"
                                fill
                                className="object-cover object-top opacity-40 transition-opacity duration-700 ease-in-out hover:opacity-80 grayscale hover:grayscale-0"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-clinical-white via-transparent to-transparent opacity-80" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: The Founder */}
                <motion.div
                    className={cn(
                        "relative flex h-1/2 flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out md:h-full",
                        hoveredSide === "right" ? "md:w-[60%]" : hoveredSide === "left" ? "md:w-[40%] opacity-50" : "md:w-1/2",
                        "bg-executive-navy"
                    )}
                    onMouseEnter={() => setHoveredSide("right")}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="relative z-10 text-center md:text-right">
                        <motion.h2
                            className="font-serif text-5xl font-light text-clinical-white md:text-8xl lg:text-9xl"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Incubating <br />
                            <span className="italic text-gold-foil">Innovation.</span>
                        </motion.h2>
                        <motion.p
                            className="mt-6 font-sans text-xs font-black uppercase tracking-[0.3em] text-gold-foil/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Venture Strategy
                        </motion.p>
                    </div>

                    {/* Placeholder for Founder Image */}
                    {/* Founder Background Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            className="relative h-full w-full"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        >
                            <Image
                                src="/jef2.jpg"
                                alt="Dr. Jeffrey Roh - Founder"
                                fill
                                className="object-cover object-center opacity-30 transition-opacity duration-700 ease-in-out hover:opacity-70 grayscale hover:grayscale-0"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-executive-navy/40 mix-blend-multiply" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Center Overlay Circle */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <motion.div
                    className="relative flex h-48 w-48 items-center justify-center rounded-full border border-executive-navy/10 bg-clinical-white/80 backdrop-blur-xl shadow-2xl md:h-64 md:w-64"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 }}
                >
                    <div className="text-center">
                        <p className="font-serif text-xl font-black tracking-tighter text-executive-navy md:text-2xl">
                            DR. JEFFREY <br /> ROH
                        </p>
                    </div>

                    {/* Rotating Text Ring */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <svg viewBox="0 0 100 100" className="h-full w-full">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="7" className="font-sans font-black uppercase tracking-widest text-executive-navy/30">
                                <textPath xlinkHref="#circle">
                                    • SURGEON • FOUNDER • INNOVATOR • CLINICIAN •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-executive-navy/20 p-2 md:h-12 md:w-7">
                    <div className="h-2 w-1 rounded-full bg-proliance-blue md:h-3 md:w-1.5" />
                </div>
            </motion.div>
        </section>
    );
}
