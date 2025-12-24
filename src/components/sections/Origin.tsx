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
                    <h3 className="font-serif text-5xl md:text-8xl text-executive-navy">Origin & Impact.</h3>
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
                    <div className="space-y-40 relative z-10">
                        {timelineEvents.map((event, index) => (
                            <div key={event.year} className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 0.6 }}
                                        className={cn(
                                            "bg-executive-navy/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-xl w-full",
                                            index % 2 === 0 ? "text-right pr-6" : "text-left pl-6"
                                        )}
                                    >
                                        <span className="font-serif text-3xl md:text-4xl italic text-gold-foil mb-4 block">{event.year}</span>
                                        <h4 className="font-sans text-xl font-black text-white uppercase tracking-widest mb-4">{event.title}</h4>
                                        <p className="font-sans text-sm text-white/70 leading-relaxed font-bold">{event.desc}</p>
                                    </motion.div>
                                </div>

                                <div className="flex-shrink-0 z-20">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-executive-black border-2 border-gold-foil flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                    >
                                        {event.icon}
                                    </motion.div>
                                </div>

                                <div className="md:w-1/2" />
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
                    className="mt-60 max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-executive-black border border-gold-foil relative overflow-hidden group text-center md:text-left shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-proliance-blue/10 blur-[100px] pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h5 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-8 italic">Encouraging <span className="text-proliance-blue">Equity</span> in Healthcare.</h5>
                            <p className="font-sans text-lg text-white/70 leading-relaxed mb-10 font-bold">
                                The Roh Family MBA Diversity Fellowship at the UW Foster School of Business supports the next generation of underrepresented leaders in the business of health.
                            </p>
                            <button className="px-10 py-4 border border-gold-foil hover:border-white transition-colors text-white font-sans text-[10px] font-black uppercase tracking-widest rounded-full">
                                Learn More
                            </button>
                        </div>
                        <div className="aspect-4/5 bg-executive-navy/50 rounded-2xl border border-white/10 flex items-center justify-center text-white/20 uppercase font-sans text-[10px] tracking-[1em] rotate-2 group-hover:rotate-0 transition-transform duration-700">
                            [ FELLOWSHIP_PHOTO ]
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
