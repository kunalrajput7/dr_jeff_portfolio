"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative bg-black pt-32 pb-16 overflow-hidden cinematic-vignette-dark">
            {/* Massive Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <h2 className="text-[20vw] font-serif font-black text-white/[0.07] whitespace-nowrap leading-none transition-transform duration-1000">
                    JEFFREY ROH
                </h2>
            </div>

            <div className="container mx-auto relative z-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32 text-center md:text-left">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="font-serif text-3xl font-black text-white tracking-tighter mb-8 block">
                            DR. JEFFREY ROH
                        </Link>
                        <p className="font-sans text-xs font-bold text-white/40 uppercase tracking-[0.3em] leading-relaxed">
                            Pioneering the intersection of <br />
                            Surgical Precision and <br />
                            Venture Innovation.
                        </p>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h6 className="font-serif text-xl text-gold-foil italic mb-8">Clinical Locations</h6>
                        <div className="space-y-6">
                            <div>
                                <p className="font-sans text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Honolulu, HI</p>
                                <p className="font-sans text-sm text-white/60 font-bold">Queen's Medical Center (Visiting Surgeon)</p>
                            </div>
                            <div>
                                <p className="font-sans text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Seattle, WA</p>
                                <p className="font-sans text-sm text-white/60 font-bold">Proliance Spine Center of Excellence</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h6 className="font-serif text-xl text-gold-foil italic mb-8">Platform</h6>
                        <ul className="space-y-4">
                            {["Clinical", "Origin", "Companion", "Bridge"].map(item => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="font-sans text-[10px] font-black text-white/40 uppercase tracking-[0.2em] hover:text-proliance-blue transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Socials Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h6 className="font-serif text-xl text-gold-foil italic mb-8">Network</h6>
                        <ul className="space-y-4">
                            {[
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/jeffreyroh/" },
                                { name: "Doximity", url: "https://www.doximity.com/pub/jeffrey-roh-md" },
                                { name: "ResearchGate", url: "https://www.researchgate.net/scientific-contributions/Jeffrey-S-Roh-11891140" },
                                { name: "IntuitiveX", url: "https://www.intuitivex.com/team" }
                            ].map(item => (
                                <li key={item.name}>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-sans text-[10px] font-black text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <p className="font-sans text-[10px] text-white/20 uppercase tracking-[0.5em] font-black">
                        © 2025 DR. JEFFREY ROH • INTUITIVEX
                    </p>
                    <div className="flex items-center gap-8">
                        <span className="font-sans text-[10px] text-emerald-500/50 uppercase tracking-widest font-black flex items-center gap-2">
                            <div className="h-2 w-2 bg-emerald-500/50 rounded-full" />
                            HIPAA COMPLIANT
                        </span>
                        <Link href="/privacy" className="font-sans text-[10px] text-white/20 uppercase tracking-widest font-black hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
