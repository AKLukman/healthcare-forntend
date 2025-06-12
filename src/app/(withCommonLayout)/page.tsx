import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection"
import HowItWorks from "@/components/ui/HomePage/HowItWorks/HowItWorks"
import SpecialistSection from "@/components/ui/HomePage/SpecialistSection/SpecialistSection"
import Stats from "@/components/ui/HomePage/Stats/Stats"
import TopRatedDoctor from "@/components/ui/HomePage/TopRatedDoctor/TopRatedDoctor"
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs"

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <SpecialistSection></SpecialistSection>
      <TopRatedDoctor></TopRatedDoctor>
      <WhyUs></WhyUs>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
    </>
  )
}

export default HomePage
