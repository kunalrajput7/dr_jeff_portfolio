"use client";

import React from "react";
import { motion } from "framer-motion";

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

export function ClinicalFoundations() {
    return (
        <section id="clinical-foundations" className="relative pt-32 md:pt-48 pb-24 overflow-hidden cinematic-studio-light">
            <div className="container mx-auto">
                {/* 2.5.1: The Definition Header */}
                <div className="max-w-3xl mx-auto text-center mb-40">
                    <p className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-executive-navy/70 mb-6">The Operating System</p>
                    <div className="relative inline-block mb-8">
                        <h3 className="font-serif text-4xl md:text-9xl text-black">Kaizen (改善)</h3>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
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
            </div>
        </section>
    );
}
