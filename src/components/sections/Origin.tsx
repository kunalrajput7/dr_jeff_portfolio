"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineEvents = [
    { year: "1970s", title: "Seattle Grocery Store", desc: "Formative years working in the family enterprise, learning the value of precision and community.", icon: "🏪" },
    { year: "1998", title: "Medical College of Wisconsin", desc: "Clinical foundation in orthopaedic surgery, specializing in complex spine pathology.", icon: "🏥" },
    { year: "2016", title: "Founded IntuitiveX", desc: "A pivot toward the 'Physician-Founder' model, bridging clinical gaps with scalable technology.", icon: "🚀" },
    { year: "Now", title: "Civic Leadership & AAPI", desc: "Board member of AAPI Victory Fund and champion for diversity in medical education.", icon: "🏛️" },
];

export function Origin() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} id="about" className="relative py-32 md:py-48 cinematic-studio-light">
            <div className="container mx-auto">
                <div className="text-center mb-32">
                    <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-gold-foil mb-4">The Narrative</p>
                    <h3 className="font-serif text-5xl md:text-8xl text-black">Origin & Impact.</h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-executive-navy/10 -translate-x-1/2 z-0">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-linear-to-b from-proliance-blue to-gold-foil"
                        />
                    </div>

                    {/* Timeline Nodes */}
                    {/* Micro-Timeline Nodes */}
                    <div className="space-y-16 relative z-10 py-12">
                        {timelineEvents.map((event, index) => (
                            <div key={event.year} className={`flex items-center gap-12 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                                {/* Content Side */}
                                <div className={cn("w-1/2 flex flex-col", index % 2 === 0 ? "items-start text-left" : "items-end text-right")}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{ duration: 0.5 }}
                                        className="group cursor-default"
                                    >
                                        <span className="font-serif text-xl italic text-gold-foil mb-1 block group-hover:text-executive-navy transition-colors">{event.year}</span>
                                        <h4 className="font-sans text-sm font-black text-executive-navy uppercase tracking-widest mb-2">{event.title}</h4>
                                        <p className="font-sans text-xs text-executive-navy/70 leading-relaxed font-bold max-w-[250px]">{event.desc}</p>
                                    </motion.div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="h-3 w-3 rounded-full bg-executive-black border border-gold-foil shadow-[0_0_10px_rgba(212,175,55,0.5)] z-20"
                                    />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philanthropy Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="mt-60 max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-black border border-gold-foil relative overflow-hidden group text-center md:text-left shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-proliance-blue/10 blur-[100px] pointer-events-none" />
                    <div className="relative z-10 flex flex-col gap-12">
                        {/* Title on Top */}
                        <h5 className="font-serif text-4xl md:text-6xl text-white leading-tight italic text-center md:text-left max-w-4xl">
                            Encouraging <span className="text-proliance-blue">Equity</span> in Healthcare.
                        </h5>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Text Block - Left (Smaller) */}
                            <div className="lg:col-span-4 flex flex-col items-start">
                                <p className="font-sans text-lg text-white/70 leading-relaxed mb-10 font-bold">
                                    The Roh Family MBA Diversity Fellowship at the UW Foster School of Business supports the next generation of underrepresented leaders in the business of health.
                                </p>
                                <button className="px-10 py-4 border border-gold-foil hover:border-white transition-colors text-white font-sans text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Learn More
                                </button>
                            </div>

                            {/* Video Block - Right (Larger) */}
                            <div className="lg:col-span-8 w-full">
                                <div className="aspect-video bg-executive-navy/50 rounded-2xl border border-white/10 overflow-hidden rotate-1 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                                    <video
                                        src="/UW.mp4"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
