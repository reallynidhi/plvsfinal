import Blog from "@/sections/Blog";
import HomeSection from "@/sections/Home";
import People from "@/sections/People";
import Portfolio from "@/sections/Portfolio";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <HomeSection />
      </section>
      <section id="portfolio" className="min-h-screen">
        <Portfolio />
      </section>
      <section id="blog" className="min-h-screen">
        <Blog />
      </section>
      <section id="people" className="min-h-screen">
        <People />
      </section>
    </>
  );
}
