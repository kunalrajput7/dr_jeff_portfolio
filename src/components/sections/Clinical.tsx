"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const pillars = [
    {
        title: "Muda (改善)",
        subtitle: "Elimination of Waste",
        desc: "Surgical trauma is waste. By using minimally invasive tubes instead of large incisions, we reduce blood loss from 500cc to 50cc. Faster recovery is the only metric.",
        icon: (
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-executive-navy">
                <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
                <path d="M45 45 L55 55 M55 45 L45 55" stroke="currentColor" strokeWidth="1" />
            </svg>
        )
    },
    {
        title: "Gemba (現場)",
        subtitle: "The Real Place",
        desc: "Innovation happens in the Operating Room, not the boardroom. I invent solutions based on the inefficiencies I face every day in surgery.",
        icon: (
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-executive-navy">
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="2" />
                <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    },
    {
        title: "Jidoka (自働化)",
        subtitle: "The Human Touch",
        desc: "Automation requires empathy. We embrace robotics and AI, but only when they serve the ultimate goal: a safer, more human patient experience.",
        icon: (
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-executive-navy">
                <path d="M50 80 C30 60 20 45 20 30 C20 15 35 15 50 25 C65 15 80 15 80 30 C80 45 70 60 50 80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="35" r="5" fill="currentColor" />
            </svg>
        )
    }
];

const loopStages = [
    { id: "identify", title: "Identify", desc: "Innovation begins at the incision. I identify inefficiencies in real-time during complex spine surgery, where every second counts." },
    { id: "invent", title: "Invent", desc: "I design and patent a device to fix it." },
    { id: "incubate", title: "Incubate", desc: "IntuitiveX builds the business case." },
    { id: "impact", title: "Impact", desc: "The technology reaches patients worldwide." }
];

export function Clinical() {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <section id="clinical" className="relative py-32 md:py-48 lg:py-64 overflow-hidden cinematic-studio-light">
            <div className="container mx-auto">
                {/* 2.5.1: The Definition Header */}
                <div className="max-w-3xl mx-auto text-center mb-40">
                    <p className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-executive-navy/70 mb-6">The Operating System</p>
                    <div className="relative inline-block mb-8">
                        <h3 className="font-serif text-4xl md:text-9xl text-executive-navy">Kaizen (改善)</h3>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false }}
                            className="absolute -bottom-4 left-0 w-full h-1 bg-gold-foil origin-left"
                        />
                    </div>
                    <p className="font-serif text-2xl md:text-3xl italic text-text-grey">Continuous Improvement. No compromise.</p>
                </div>

                {/* 2.5.2: The Three Pillars of Practice */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 mb-48">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="mb-8 p-6 bg-clinical-white rounded-2xl shadow-sm border border-executive-navy/5 group-hover:shadow-md transition-all">
                                {pillar.icon}
                            </div>
                            <h4 className="font-sans text-xs font-black uppercase tracking-widest text-executive-navy mb-2">{pillar.title}</h4>
                            <p className="font-serif text-2xl md:text-3xl text-executive-navy mb-6">{pillar.subtitle}</p>
                            <p className="font-sans text-sm text-executive-navy/70 leading-relaxed font-bold">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 2.5.3: The Innovation Loop */}
                <div className="py-40 border-y border-executive-navy/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Circular Diagram SVG */}
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#0A192F10" strokeWidth="0.5" />
                                {loopStages.map((stage, i) => {
                                    const angle = (i * 90) - 90;
                                    const rad = angle * (Math.PI / 180);
                                    const x = 50 + 45 * Math.cos(rad);
                                    const y = 50 + 45 * Math.sin(rad);
                                    return (
                                        <g key={stage.id} onClick={() => setActiveStage(i)} className="cursor-pointer group">
                                            <motion.circle
                                                cx={x} cy={y} r="4"
                                                fill={activeStage === i ? "#D4AF37" : "#0A192F20"}
                                                className="transition-colors duration-500"
                                            />
                                            <text
                                                x={x} y={y + 10}
                                                textAnchor="middle"
                                                className={cn(
                                                    "font-sans text-[3px] font-black uppercase tracking-[0.2em] transition-all",
                                                    activeStage === i ? "fill-executive-navy" : "fill-executive-navy/20"
                                                )}
                                            >
                                                {stage.title}
                                            </text>
                                        </g>
                                    );
                                })}
                                {/* Mechanical Shutter Representation */}
                                <motion.circle
                                    animate={{ rotate: activeStage * 90 }}
                                    cx="50" cy="50" r="15" fill="none" stroke="#0A192F" strokeWidth="0.5" strokeDasharray="5,5"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif text-5xl italic text-executive-navy">0{activeStage + 1}</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStage}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h5 className="font-serif text-5xl md:text-6xl text-executive-navy italic">{loopStages[activeStage].title}</h5>
                                    <p className="font-sans text-xl text-executive-navy/80 leading-relaxed">
                                        {loopStages[activeStage].desc}
                                    </p>
                                    <div className="h-[2px] w-24 bg-proliance-blue" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
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
                            <h5 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">The 2025 Vision: <br /><span className="italic text-gold-foil">Excel Health.</span></h5>
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
