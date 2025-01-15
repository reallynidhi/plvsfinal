import Blog from "@/sections/Blog";
import HomeSection from "@/sections/Home";
import People from "@/sections/People";
import Portfolio from "@/sections/Portfolio";

export default function Home() {
  return (
    <>
      <section id="home">
        <HomeSection />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="people">
        <People />
      </section>
    </>
  );
}
