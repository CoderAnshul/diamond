import GreenBoxText from "@/components/homepage/GreenBoxText";
import HeroSection from "@/components/homepage/HeroSection";
import VideoSection from "@/components/homepage/VideoSection";
import SliderBox from "@/components/SliderBox";
import { 
  ringStyles, 
  sliderConfigs 
} from "../data/sliderdata";
import Collections from "@/components/homepage/Collections";
import SliderBoxTwo from "@/components/homepage/CategoriesSlider";
import Services from "@/components/homepage/Services";
import Education from "@/components/homepage/Education";
import Reviews from "@/components/homepage/Reviews";
import VideoReviews from "@/components/homepage/VideoReview";
import Faq from "@/components/Faq";

export default function Home() {

  return (
    <div>
      <HeroSection />
      
      {/* Ring Styles Slider */}
      <SliderBox 
        items={ringStyles}
        {...sliderConfigs.ringStyles}
      />
      <GreenBoxText />
      <VideoSection />

      <SliderBox 
        items={ringStyles}
        {...sliderConfigs.ringStyles}
      />
      <Collections className='!flex-row'/>
      <SliderBoxTwo />
      <Collections className='!flex-row-reverse'/>
      <Services />
      <Collections className='!flex-row'/>
      <Education/>
      <Reviews/>
      <VideoReviews/>
      <Faq/>

    </div>
  );
}