import Aboutme from "@/components/Aboutme";
import Container from "@/components/Container";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroAbout from "@/components/HeroAbout";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies"
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <>

   <Container>

    <HeroAbout/>
    <Aboutme/>
    <Experience/>
   <Projects/>
   <Technologies/>
   <Testimonial/>
   </Container>
  
   </>
  )
}
