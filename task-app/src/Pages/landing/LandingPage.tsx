import CallToAction from "./CallToAction"
import FeaturesSection from "./FeaturesSection"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import ProductPreview from "./ProductPreview"
import TopNavBar from "./TopNavBar"

const LandingPage = () => {
  return (
    <>
      <TopNavBar />

      <main>
        <HeroSection />
        <ProductPreview />
        <FeaturesSection />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default LandingPage