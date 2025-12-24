"use client";

import React from "react";
import { motion } from "framer-motion";

export function SizzleVideo() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 cinematic-studio-light">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(10,25,47,0.1)_20px,rgba(10,25,47,0.1)_21px)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5 }}
                        className="font-sans text-[10px] md:text-xs font-black uppercase text-executive-navy/70 mb-12 text-center"
                    >
                        [ The Physician-Founder Sizzle ]
                    </motion.p>

                    {/* Animated Video Placeholder Box */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl aspect-video bg-executive-black rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,25,47,0.3)] group cursor-pointer"
                    >
                        {/* Decorative Premium Borders */}
                        <div className="absolute inset-4 border border-white/10 rounded-xl" />
                        <div className="absolute inset-0 border-[10px] md:border-[20px] border-executive-navy/50" />

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-foil m-4" />
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold-foil m-4" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold-foil m-4" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-foil m-4" />

                        {/* Animated Inner Glow */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,94,184,0.15),transparent_70%)]"
                        />

                        {/* Centered Play UI */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-24 w-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-proliance-blue group-hover:border-proliance-blue transition-all duration-500"
                            >
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                            </motion.div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                            <h3 className="font-serif text-3xl text-white italic">Precision Meets Purpose.</h3>
                            <p className="font-sans text-[10px] uppercase font-black tracking-widest text-white/40 mt-2">Coming Soon • Q1 2025</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
