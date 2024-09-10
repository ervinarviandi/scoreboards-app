"use client";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";
import Hero from "@/components/commons/Hero";
import LoaderScreen from "@/components/commons/LoaderScreen";
export default function Home() {

      

 


  return (
    <>
    <div className="relative">
    <LoaderScreen/>
    <Header />
    <Hero/>
    <Footer/>
    </div>
        </>
  );
}


