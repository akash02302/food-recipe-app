import Herosection from  "../components/HeroSection";
import Improveskills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import ChiefSection from "../components/ChiefSection";

export default function Home(){
    return (
        <div>
            <Herosection />
            <Improveskills />
            <QuoteSection />
            <ChiefSection />
        </div>
    )
}