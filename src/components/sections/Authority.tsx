"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = ["Stryker", "Johnson & Johnson", "Intuitive Surgical", "Bioventus", "UW Foster", "Globus Medical", "NuVasive", "Medtronic"];

const patents = [
    { id: "US10874464B2", title: "AI Guidance for Robotic Surgery", size: "large" },
    { id: "US20140277145A1", title: "Percutaneous Cross Link", size: "small" },
    { id: "US9827022B2", title: "Expandable Interbody Device", size: "small" },
    { id: "US11020234B2", title: "Dynamic Spinal Stabilization", size: "medium" },
    { id: "30+", title: "Additional Patents Filed Globaly", size: "small" },
];

export function Authority() {
    return (
        <section id="patents" className="bg-executive-black py-32 md:py-48 border-t border-white/5">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="mb-24">
                    <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-gold-foil mb-4">Intellectual Property</p>
                    <h3 className="font-serif text-5xl md:text-7xl text-white">The Switzerland Strategy.</h3>
                </div>

                {/* Patent Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-48">
                    {patents.map((patent, index) => (
                        <motion.div
                            key={patent.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative p-8 rounded-[2rem] border border-white/5 bg-executive-navy/20 overflow-hidden flex flex-col justify-between min-h-[250px]",
                                patent.size === "large" ? "md:col-span-2 md:row-span-2 min-h-[524px]" : "",
                                patent.size === "medium" ? "md:row-span-1" : ""
                            )}
                        >
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(212,175,55,0.1),transparent_70%)]"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                                    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                                }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <span className="font-sans text-[10px] font-black text-white/30 tracking-widest uppercase mb-4">{patent.id}</span>
                                <h4 className={cn(
                                    "font-serif text-white flex-grow",
                                    patent.size === "large" ? "text-4xl md:text-6xl" : "text-2xl"
                                )}>
                                    {patent.title}
                                </h4>
                                <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="font-sans text-[10px] font-black text-gold-foil uppercase tracking-widest">View Abstract</span>
                                    <div className="h-[1px] flex-grow mx-4 bg-gold-foil/20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partner Marquee */}
                <div className="relative pt-32 md:pt-48 border-t border-white/5">
                    <div className="mb-12 text-center">
                        <p className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Collaborations & Partnerships</p>
                    </div>

                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-20 whitespace-nowrap min-w-full"
                        >
                            {[...partners, ...partners].map((partner, i) => (
                                <span key={i} className="font-serif text-4xl md:text-6xl lg:text-7xl text-white/10 hover:text-white transition-colors cursor-default">
                                    {partner}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Inline helper for CN as I didn't import it at the top properly in the thinking block
function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
