"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Bridge() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id="bridge" ref={containerRef} className="relative h-screen w-full overflow-hidden cinematic-studio-light">
            {/* Parallax Video Container */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 h-[120%] w-full"
            >
                {/* Placeholder Video Overlay */}
                <div className="absolute inset-0 bg-white/20 z-10" />

                {/* Fallback Placeholder (using gradient as video isn't provided yet) */}
                <div className="h-full w-full bg-linear-to-b from-executive-navy/5 to-gold-foil/5 flex items-center justify-center">
                    <p className="font-sans text-xs font-black text-executive-navy/20 uppercase tracking-[1em]">Dr. Jeffrey Roh</p>
                </div>

                {/* Real video tag would go here: 
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="h-full w-full object-cover"
                >
                    <source src="/placeholder_video.mp4" type="video/mp4" />
                </video>
                */}
            </motion.div>

            {/* Overlay Text */}
            <div className="relative z-20 h-full w-full flex items-center justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mix-blend-difference italic font-light tracking-tighter"
                >
                    THE PHYSICIAN-FOUNDER
                </motion.h2>
            </div>

            {/* Scroll Progress Line */}
            <div className="absolute left-1/2 bottom-0 w-[1px] h-24 bg-linear-to-b from-transparent to-executive-navy z-30" />
        </section>
    );
}
