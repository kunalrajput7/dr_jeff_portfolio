import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { SizzleVideo } from "@/components/sections/SizzleVideo";
import { Clinical } from "@/components/sections/Clinical";
import { Origin } from "@/components/sections/Origin";
import { RohAI } from "@/components/sections/RohAI";
import { Bridge } from "@/components/sections/Bridge";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-clinical-white">
      <Navbar />
      <Hero />
      <SizzleVideo />
      <Clinical />
      <RohAI />
      <Origin />
      <Bridge />
      <Footer />
    </main>
  );
}
