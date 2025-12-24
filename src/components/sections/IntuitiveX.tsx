"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const companies = [
    {
        name: "Amplify Surgical",
        stat: "1,400+ Surgeries",
        desc: "Transforming spinal fusion with the dualX expandable cage system.",
        tag: "Core Exit",
        color: "bg-blue-500/20"
    },
    {
        name: "Carlsmed",
        stat: "FDA Breakthrough",
        desc: "AI-driven 3D-printed patient-specific spine implants.",
        tag: "Series B+",
        color: "bg-purple-500/20"
    },
    {
        name: "AltPep",
        stat: "Series A Funded",
        desc: "Early detection and treatment for Alzheimer's and Parkinson's.",
        tag: "Therapeutics",
        color: "bg-emerald-500/20"
    },
    {
        name: "Chiral Surgical",
        stat: "Acquired",
        desc: "Advanced robotic-compatible surgical toolsets.",
        tag: "M&A",
        color: "bg-gold-foil/20"
    }
];

export function IntuitiveX() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} id="ventures" className="relative h-[400vh] bg-executive-black">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* Section Header */}
                <div className="container mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-clinical-white leading-none">
                            Crossing the <br />
                            <span className="italic text-gold-foil">Valley of Death.</span>
                        </h3>
                        <p className="mt-8 font-sans text-xs font-black uppercase tracking-[0.4em] text-white/40 max-w-xl">
                            From Clinical Need to Commercial Exit. We build the bridge for life-changing medical technologies.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="relative flex items-center">
                    <motion.div style={{ x }} className="flex gap-12 px-6 md:px-24">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                className="group relative h-[500px] w-[350px] md:w-[450px] shrink-0 rounded-[2.5rem] bg-executive-navy/40 backdrop-blur-xl border border-white/5 p-10 flex flex-col justify-between overflow-hidden"
                                whileHover={{ y: -10, rotateZ: index % 2 === 0 ? 1 : -1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-[at_50%_0%,var(--tw-gradient-stops)] from-white/10 to-transparent" />

                                <div className="relative z-10">
                                    <div className={cn("inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60 border border-white/10 mb-8", company.color)}>
                                        {company.tag}
                                    </div>
                                    <h4 className="font-serif text-3xl md:text-4xl text-white mb-2">{company.name}</h4>
                                    <p className="font-sans text-sm text-white/50 leading-relaxed font-bold">
                                        {company.desc}
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <p className="font-serif text-4xl md:text-5xl text-gold-foil italic">{company.stat}</p>
                                    <div className="mt-6 flex items-center gap-4 group/btn cursor-pointer">
                                        <div className="h-[1px] w-12 bg-white/20 group-hover/btn:w-20 transition-all duration-500" />
                                        <span className="font-sans text-[10px] font-black uppercase tracking-widest text-white group-hover/btn:text-gold-foil transition-colors">Case Study</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Timeline Progress Line (Horizontal) */}
                <div className="absolute bottom-10 left-0 w-full px-24 hidden md:block">
                    <div className="h-[1px] w-full bg-white/5 relative">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="absolute inset-0 bg-gold-foil origin-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
