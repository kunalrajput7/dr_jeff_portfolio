"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const services = [
    {
        title: "Portrait",
        price: "$500",
        features: ["2 Hour Session", "30 Edited Photos", "Online Gallery", "Print Release"],
    },
    {
        title: "Editorial",
        price: "$1200",
        features: ["Half Day Shoot", "Unlimited Looks", "High-End Retouching", "Commercial License"],
        featured: true,
    },
    {
        title: "Event",
        price: "$2500",
        features: ["Full Day Coverage", "Second Shooter", "Next Day Previews", "Full Gallery Delivery"],
    },
];

export function Services() {
    return (
        <Card className="bg-[#111] text-white border-none min-h-[500px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 pt-4">
                <div>
                    <div className="inline-block border border-gray-700 rounded-full px-4 py-1 text-xs font-bold tracking-widest mb-6 text-gray-400">
                        SERVICES & PRICING
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        INVESTMENT
                    </h2>
                </div>
                <p className="max-w-md text-gray-400 text-lg leading-relaxed">
                    Transparent pricing packages for every need. Custom quotes available for large scale commercial projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className={`rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${service.featured ? 'bg-[#1a1a1a] shadow-2xl border border-gray-800' : 'bg-transparent border border-gray-800 hover:bg-[#1a1a1a]'}`}
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <div className="text-4xl font-bold tracking-tight">{service.price}</div>
                        </div>

                        <ul className="grid gap-4 mb-10 flex-1">
                            {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Check size={10} className="text-white" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button className={`${service.featured ? "bg-white text-black hover:bg-gray-200" : "bg-white/5 hover:bg-white/10 text-white border-none"} w-full rounded-full py-6 font-bold`}>
                            Reserve Now
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    );
}
