"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function SizzleVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
            setIsMuted(false);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 cinematic-studio-light">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(10,25,47,0.1)_20px,rgba(10,25,47,0.1)_21px)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5 }}
                        className="font-sans text-[10px] md:text-xs font-black uppercase text-executive-navy/70 mb-12 text-center"
                    >
                        [ The Physician-Founder Sizzle Reel ]
                    </motion.p>

                    {/* Animated Video Box */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl aspect-video bg-executive-black rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,25,47,0.3)] group cursor-pointer"
                        onClick={togglePlay}
                    >
                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            src="/sizzle_video.mp4"
                            poster="/sizzle_thumb.png"
                            className="w-full h-full object-cover"
                            playsInline
                            loop
                            muted={isMuted}
                        />

                        {/* Overlay Controls */}
                        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                            {/* Play/Pause Center Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-proliance-blue hover:border-proliance-blue transition-all duration-300"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8 text-white fill-current" />
                                    ) : (
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex justify-between items-end bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl text-white italic mb-2">Precision Meets Purpose.</h3>
                                <p className="font-sans text-[10px] uppercase font-black tracking-widest text-white/60">Dr. Jeffrey Roh • 2026</p>
                            </div>

                            <button
                                onClick={toggleMute}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                            </button>
                        </div>

                        {/* Decorative Premium Borders */}
                        <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
