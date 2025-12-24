"use client";

import React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/Card";

export function About() {
    return (
        <Card className="min-h-[600px] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Image Side */}
                <div className="w-full h-[500px] relative overflow-hidden rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700 group">
                    <Image
                        src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2000&auto=format&fit=crop"
                        alt="Studio"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold tracking-widest border border-gray-100 rounded-full text-black">
                        EST. 2018
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-8 p-4">
                    <div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 block">About the Artist</span>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-black">
                            NOT JUST A <br />
                            <span className="text-gray-400">PHOTOGRAPHER.</span>
                        </h2>
                    </div>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        We help models, brands, and creatives tell their story through compelling imagery. Our approach is minimal, calm, and intentional, focusing on the raw emotion and authentic moments.
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                        <div>
                            <h4 className="text-4xl font-black text-black">200+</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-black">15</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Awards Won</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Gear</h4>
                        <ul className="flex flex-wrap gap-2">
                            {['Canon R5', 'Sony A7IV', '85mm f/1.2', 'Profoto B10'].map(gear => (
                                <li key={gear} className="px-3 py-1 border border-gray-200 text-sm text-gray-500 rounded-lg">
                                    {gear}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    );
}
