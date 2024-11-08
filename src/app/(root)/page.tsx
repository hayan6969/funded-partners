'use client'
import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero";
import Nav from "@/components/navbar/nav";
import Partner from "@/components/Parnters/partner";
import { store } from "@/components/redux/store/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <div className=" w-screen">
      <div className="flex justify-center w-screen z-50 overflow-x-hidden">
        <Nav/>
      </div>
      <Hero />
      <Partner/>
      <Footer/>
    </div>
  );
}
