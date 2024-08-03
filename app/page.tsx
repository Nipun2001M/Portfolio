import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Technology from "@/components/Technology";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black-100
   flex justify-center items-center flex-col overflow-hidden mx-auto
   sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav
      navItems={navItems}
      
      />
    <Hero/>
    <Grid/>
    <Technology/>
    <RecentProjects/>
    <Contact/>
    
    <Footer/>
    </div>
   </main>
  );
}
