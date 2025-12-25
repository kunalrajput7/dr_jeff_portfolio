"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";

export function Bridge() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
            setMuted(false); // Unmute on explicit play interaction
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        videoRef.current.muted = !muted;
        setMuted(!muted);
    };



    // Keep state in sync if video ends or pauses naturally
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePause = () => setPlaying(false);
        const handlePlay = () => setPlaying(true);
        const handleEnded = () => {
            setPlaying(false);
            // Optional: loop is false, so it stops. If we want loop, we can add it.
            // User didn't specify, but sizzle reels usually stop or loop. Let's start with stop logic.
        };

        video.addEventListener("pause", handlePause);
        video.addEventListener("play", handlePlay);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("pause", handlePause);
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <section id="bridge" ref={containerRef} className="relative h-screen w-full overflow-hidden cinematic-studio-light group">
            {/* Parallax Video Container */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 h-[120%] w-full bg-black"
            >
                {/* Overlay Gradient */}
                <motion.div
                    animate={{ opacity: playing ? 0 : 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-executive-navy/20 z-10 pointer-events-none"
                />

                {/* Native Video Player */}
                <video
                    ref={videoRef}
                    src="/bridge_video.mp4"
                    className="w-full h-full object-cover"
                    muted={muted}
                    playsInline
                    preload="metadata"
                />
            </motion.div>

            {/* Click Surface for Play/Pause (Entire Section) */}
            <div
                onClick={togglePlay}
                className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center data-[playing=true]:cursor-default"
                data-playing={playing}
            >
                {/* Big Optical Play Button - Reappears on Hover if paused, or initially */}
                <AnimatePresence>
                    {!playing && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="relative group/play"
                        >
                            <div className="absolute inset-0 bg-gold-foil/20 rounded-full blur-xl animate-pulse" />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-transform duration-500 group-hover/play:scale-110">
                                <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white translate-x-1" />
                            </div>
                            <p className="mt-4 text-center font-sans text-xs font-black uppercase tracking-[0.4em] text-white/80">
                                THE JOURNEY SO FAR
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Overlay Text - Fades out when playing */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <AnimatePresence>
                    {!playing && (
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mix-blend-difference italic font-light tracking-tighter text-center px-4"
                        >
                            THE PHYSICIAN-FOUNDER
                        </motion.h2>
                    )}
                </AnimatePresence>
            </div>

            {/* Custom Control Bar - Bottom Right */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 flex items-center gap-4">
                <AnimatePresence>
                    {playing && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex items-center gap-4 p-4 rounded-full bg-executive-navy/20 backdrop-blur-xl border border-white/10"
                        >
                            <button
                                onClick={toggleMute}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                                aria-label="Toggle Mute"
                            >
                                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scroll Progress Line - Fades out when playing */}
            <motion.div
                animate={{ opacity: playing ? 0 : 1 }}
                className="absolute left-1/2 bottom-0 w-[1px] h-24 bg-linear-to-b from-transparent to-white z-30"
            />
        </section>
    );
}
