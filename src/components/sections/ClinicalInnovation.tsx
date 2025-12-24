"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ClinicalIdentity } from "./ClinicalIdentity";

export function ClinicalInnovation() {
    return (
        <section id="clinical-innovation" className="relative pt-0 md:pt-12 pb-32 md:pb-48 overflow-hidden cinematic-studio-light">
            <div className="container mx-auto">
                {/* 2.5.3: The Innovation Loop -> Replaced with Clinical Identity */}
                <div className="py-20 border-y border-executive-navy/5">
                    <ClinicalIdentity />
                </div>

                {/* 2.5.4: The Family Test Manifesto */}
                <div className="mt-48 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gold-foil rounded-full" />
                    <div className="pl-16 py-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="font-serif text-3xl md:text-5xl lg:text-6xl text-executive-navy leading-tight italic"
                        >
                            {/* Static Prefix */}
                            <span>"The spine is the body's foundation. My challenge is embracing innovation while preserving the timeless art of surgical judgment. I apply the </span>

                            {/* Animated Family Test */}
                            <span className="text-gold-foil not-italic font-bold">Family Test</span>

                            {/* Animated Suffix with Typing Effect */}
                            <span>: </span>
                            {"If I wouldn't do it to my family, I won't do it to you.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.05, delay: i * 0.05 + 0.5 }}
                                    className="inline-block mr-[0.2em]"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            "
                        </motion.div>
                    </div>
                </div>

                {/* 2.5.5: The 2025 Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-60 relative p-12 md:p-24 rounded-[4rem] bg-executive-navy text-white overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Abstract Spine Topology Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#D4AF37_0%,transparent_70%)] opacity-20" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-gold-foil mb-6 block">Future Strategy</span>
                            <h5 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">The 2026 Vision: <br /><span className="italic text-gold-foil">Excel Health.</span></h5>
                            <button className="flex items-center gap-6 px-10 py-5 bg-white text-executive-navy rounded-full font-sans text-[10px] font-black uppercase tracking-widest hover:bg-gold-foil transition-colors group">
                                Explore the Future of Care
                                <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-2 transition-transform">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-12">
                            <div className="border-l border-white/20 pl-8">
                                <h6 className="font-sans text-xs font-black uppercase tracking-widest text-white/40 mb-2">The Goal</h6>
                                <p className="font-serif text-2xl text-white italic">Moving complex care from Hospitals → Outpatient Centers.</p>
                            </div>
                            <div className="border-l border-white/20 pl-8">
                                <h6 className="font-sans text-xs font-black uppercase tracking-widest text-white/40 mb-2">The Rationale</h6>
                                <p className="font-sans text-sm text-white/60 leading-relaxed font-bold">Boutique-level experience. Lower infection risk. Higher efficiency. This is the future of spine care.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
