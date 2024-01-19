import {
  About,
  Hero,
  Tech,
  Experience,
  Projects,
  Feedbacks,
} from "../Home/index";

const Home = () => {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
      </div>
    </div>
  );
};

export default Home;
