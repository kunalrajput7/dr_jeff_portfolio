"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const suggestions = [
    "How fast is recovery?",
    "Tell me about IntuitiveX.",
    "Schedule a Keynote."
];

export function RohAI() {
    return (
        <section id="contact" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center cinematic-studio-light pt-32 md:pt-48 pb-0 md:pb-12">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#0A192F_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Header Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16 flex flex-col items-center gap-6"
                >
                    {/* <p className="font-sans text-[10px] md:text-xs font-black uppercase text-executive-navy/60 tracking-[0.4em]">
                        [ Interactive Digital Twin ]
                    </p> */}

                    <div className="flex items-center gap-6">
                        {/* Animated Portrait */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-proliance-blue/30 rounded-full animate-ping" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-executive-navy shadow-lg">
                                <img
                                    src="/jef3.jpg"
                                    alt="Dr. Jeffrey Roh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="font-serif text-4xl md:text-6xl text-black italic">Surgical Patient Concierge</h3>
                    </div>
                </motion.div>

                {/* Massive Premium Window Frame - Optimized to ~85vw x 90vh */}
                <div className="relative w-[95vw] h-[80vh] md:w-[85vw] md:h-[100vh] group">
                    {/* Floating Informative Text Tags */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -left-8 z-20 hidden lg:block"
                    >
                        <div className="backdrop-blur-xl bg-white/40 border border-executive-navy/10 px-6 py-3 rounded-full shadow-xl">
                            <p className="font-sans text-[10px] font-black uppercase tracking-widest text-executive-navy">
                                <span className="text-proliance-blue mr-2">●</span> Surgical Logic Protocol v4.2
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-12 -right-8 z-20 hidden lg:block"
                    >
                        <div className="backdrop-blur-xl bg-executive-navy/5 border border-executive-navy/10 px-6 py-3 rounded-full shadow-xl">
                            <p className="font-sans text-[10px] font-black uppercase tracking-widest text-executive-navy">
                                24/7 Neural Intelligence • LIVE
                            </p>
                        </div>
                    </motion.div>

                    {/* The Frame Container - Static (No Entry Animation) */}
                    <div
                        className="relative w-full h-full bg-[#f9fafb] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(10,25,47,0.2)] border border-executive-navy/10 flex flex-col"
                    >
                        {/* Top Control Bar Decoration */}
                        <div className="h-12 bg-white border-b border-executive-navy/5 flex items-center px-6 gap-2 shrink-0 z-20">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                            </div>
                            {/* <div className="flex-1 text-center pr-12">
                                <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-executive-navy/40">
                                    https://excelhealth1476.companionstudio.ai/
                                </span>
                            </div> */}
                        </div>
                        {/* Text Overlay */}
                        <div className="absolute top-12 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-foil m-4 z-20 opacity-40 pointer-events-none" />
                        <div className="absolute top-12 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-foil m-4 z-20 opacity-40 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-foil m-4 z-20 opacity-40 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-foil m-4 z-20 opacity-40 pointer-events-none" />

                        {/* The Iframe Embedding */}
                        <div className="flex-1 w-full h-full relative">
                            <iframe
                                src="https://excelhealthai.cognitionthrives.com/"
                                className="absolute inset-0 w-full h-full border-none"
                                title="Dr. Roh AI Companion"
                                allow="microphone; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                loading="eager"
                            />

                            {/* Overlay Button for Full Functionality */}
                            <div className="absolute bottom-8 right-8 z-20">
                                <a
                                    href="https://excelhealth1476.companionstudio.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-3 px-6 py-3 bg-executive-navy/90 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-executive-navy hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <span className="font-outfit text-white font-medium tracking-wide text-sm">Start Conversation with Dr. Roh</span>
                                    <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 font-sans text-[9px] uppercase font-black tracking-[0.6em] text-executive-navy/30 text-center"
                >
                    Secured Medical Logic • Physician Proprietary Data
                </motion.p>
            </div>
        </section>
    );
}
