"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const circleOfFive = [
    { id: 1, title: "The Surgeon", role: "Structural Correction", color: "bg-executive-navy" },
    { id: 2, title: "Physiatry", role: "Non-operative Management", color: "bg-proliance-blue" },
    { id: 3, title: "Physical Therapy", role: "Functional Restoration", color: "bg-gold-foil" },
    { id: 4, title: "Pain Mgmt", role: "Symptom Control", color: "bg-emerald-600" },
    { id: 5, title: "The Patient", role: "Center of the Circle", color: "bg-white border-2 border-executive-navy text-executive-navy" },
];

export function ClinicalIdentity() {
    const [missMode, setMissMode] = useState(false); // false = Open, true = MISS

    return (
        <section className="w-full relative overflow-hidden">
            {/* Background Wireframe */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
                {/* Abstract Vertebrae Wireframe */}
                <svg viewBox="0 0 200 200" className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] text-executive-navy">
                    <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M100,20 C60,20 30,50 30,90 C30,130 50,160 100,180 C150,160 170,130 170,90 C170,50 140,20 100,20 Z M100,40 C120,40 135,55 135,75 C135,95 120,110 100,110 C80,110 65,95 65,75 C65,55 80,40 100,40 Z" />
                    <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M100,110 L100,180 M65,75 L30,90 M135,75 L170,90" />
                </svg>
            </div>

            <div className="container mx-auto relative z-10 px-6">

                {/* Task 2.1: The Core Thesis */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="mb-12"
                    >
                        <h4 className="font-serif text-5xl md:text-7xl text-executive-navy mb-6">The Architecture of Preservation.</h4>
                        <p className="font-sans text-xl text-executive-navy/70 max-w-2xl mx-auto leading-relaxed">
                            Minimally Invasive Spine Surgery (MISS) is not just a technique. It is a philosophy of respect for the human anatomy.
                        </p>
                    </motion.div>

                    {/* The Dead Space Toggle */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-executive-navy/5 relative overflow-hidden">
                        <div className="flex justify-center mb-8">
                            <div className="bg-executive-navy/5 p-1 rounded-full flex gap-2 relative">
                                <motion.div
                                    className="absolute inset-y-1 bg-white rounded-full shadow-sm"
                                    initial={false}
                                    animate={{
                                        left: missMode ? "50%" : "4px",
                                        right: missMode ? "4px" : "50%"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <button
                                    onClick={() => setMissMode(false)}
                                    className={cn("relative z-10 px-6 py-3 rounded-full font-sans text-xs font-black uppercase tracking-widest transition-colors", !missMode ? "text-executive-navy" : "text-executive-navy/40")}
                                >
                                    Open Surgery
                                </button>
                                <button
                                    onClick={() => setMissMode(true)}
                                    className={cn("relative z-10 px-6 py-3 rounded-full font-sans text-xs font-black uppercase tracking-widest transition-colors", missMode ? "text-executive-navy" : "text-executive-navy/40")}
                                >
                                    Dr. Roh's MISS
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Morphing Visual */}
                            <div className="h-64 bg-executive-navy/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {!missMode ? (
                                        <motion.div
                                            key="open"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="text-center"
                                        >
                                            {/* Representation of Open Surgery (Wide Dissection) */}
                                            <div className="w-32 h-20 border-b-4 border-red-500 mx-auto mb-4 relative">
                                                <div className="absolute -left-4 -top-8 w-4 h-24 bg-red-400/20 rotate-[-15deg]" />
                                                <div className="absolute -right-4 -top-8 w-4 h-24 bg-red-400/20 rotate-[15deg]" />
                                            </div>
                                            <p className="font-serif text-red-500 italic">Structural Disruption</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="miss"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="text-center"
                                        >
                                            {/* Representation of MISS (Tubular) */}
                                            <div className="w-12 h-32 border-x-2 border-emerald-500 mx-auto mb-4 bg-emerald-500/10" />
                                            <p className="font-serif text-emerald-600 italic">Anatomical Preservation</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Informative Text */}
                            <div className="text-left">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={missMode ? "miss-text" : "open-text"}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h5 className="font-sans text-xs font-black uppercase tracking-widest text-executive-navy/50 mb-4">
                                            {missMode ? "THE SOLUTION" : "THE PROBLEM"}
                                        </h5>
                                        <h3 className="font-serif text-3xl text-executive-navy mb-4">
                                            {missMode ? "Muscle Dilation, Not Division." : "The Creation of 'Dead Space'."}
                                        </h3>
                                        <p className="font-sans text-sm text-executive-navy/70 font-bold leading-relaxed">
                                            {missMode
                                                ? "By using tubular retractors, we gently separate muscle fibers instead of cutting them. The soft tissue envelope is preserved, eliminating the space where infections typically breed."
                                                : "Traditional dissection strips muscles off the bone, leaving behind a hollow void ('dead space') that fills with fluid. This is the primary breeding ground for postoperative infection."}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task 2.2: Circle of Five */}
                <div className="mb-20">
                    <div className="flex flex-col items-center gap-12 text-center">
                        <div className="max-w-2xl">
                            <h5 className="font-serif text-4xl text-executive-navy italic mb-6">The Circle of Five.</h5>
                            <p className="font-sans text-sm text-executive-navy/70 leading-relaxed font-bold mb-8">
                                Surgery is the last resort. We exhaust every non-operative avenue—collaborating with sports medicine and physiatry—before we ever pick up a scalpel.
                            </p>
                        </div>
                        <div className="w-full flex justify-center -space-x-4 md:-space-x-8 overflow-x-auto py-10 px-4">
                            {circleOfFive.map((member, i) => (
                                <motion.div
                                    key={member.id}
                                    whileHover={{ scale: 1.1, zIndex: 10, y: -10 }}
                                    className={cn(
                                        "w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white transition-all cursor-default shrink-0",
                                        member.color,
                                        member.id === 5 ? "text-executive-navy" : "text-white"
                                    )}
                                >
                                    <span className="font-sans text-[10px] uppercase font-black tracking-widest opacity-70 mb-1">{member.title}</span>
                                    <span className={cn("font-serif italic text-sm leading-tight", member.id === 5 && "font-bold")}>{member.role}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

