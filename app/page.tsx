import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/section";

const page = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="px-12 py-7.5">
        <HeroSection />
        Hello world!!
      </div>

      <Footer />
    </div>
  );
};

export default page;
