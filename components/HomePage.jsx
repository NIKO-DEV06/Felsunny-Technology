import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <main className="md:p-[4.5rem] bg-[#dfe8ec]">
      <HomeSection />
      <ServicesSection />
    </main>
  );
};

export default HomePage;
