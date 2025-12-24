import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

const projects = [
    {
        id: 1,
        title: "Urban Portraits",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        size: "horizontal"
    },
    {
        id: 2,
        title: "Fashion Week",
        category: "Event",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        size: "vertical"
    },
    {
        id: 3,
        title: "Lifestyle",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 4,
        title: "Studio",
        category: "Portrait",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 5,
        title: "Editorial",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
        size: "small"
    }
];

export function Portfolio() {
    return (
        <Card className="min-h-screen">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-gray-100 pb-8">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-black">
                    SELECTED <br />
                    <span className="text-gray-400">WORKS</span>
                </h2>
                <div className="hidden md:block text-sm font-bold tracking-widest text-gray-500 mb-2">
                    (2023 — 2024)
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
                {/* Masonry-style Grid */}
                <div className="md:col-span-2 relative h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer">
                    <Image
                        src={projects[0].image}
                        alt={projects[0].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white/90 backdrop-blur-md text-black text-xs font-bold px-3 py-1 uppercase rounded-full">{projects[0].category}</span>
                    </div>
                </div>

                <div className="md:col-span-1 relative h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer">
                    <Image
                        src={projects[1].image}
                        alt={projects[1].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white/90 backdrop-blur-md text-black text-xs font-bold px-3 py-1 uppercase rounded-full">{projects[1].category}</span>
                    </div>
                </div>

                {projects.slice(2).map((project) => (
                    <div key={project.id} className="relative h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 drop-shadow-md">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
