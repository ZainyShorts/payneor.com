
import { CompanyMilestone } from "@/components/milestone" 
import { AboutSection } from "@/components/about/about"
import { Navbar } from "@/components/navbar"
import { StatsSection } from "@/components/stats/stats"

export default function Home() {
  return (
    <main className="relative">
      <Navbar /> 
      <StatsSection/>  
      <CompanyMilestone/>
      <AboutSection/>
     
    </main>
  )
}
