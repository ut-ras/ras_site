import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "@/components/Button";

const Hero = () => {
  const words = [
    "Mern stack developer",
    "Frontend developer",
    "Backend developer",
    "Full stack developer",
  ];

  return (
    <div className="w-full bg-hero-image bg-cover">
      <Container className="py-20">
        <div className="w-1/2 flex flex-col gap-y-5">
          <p className="text-base uppercase text-lightText">
            IEEE Robotics and Automation Society
          </p>
          <h2 className="text-7xl font-bold text-white">
            Welcome to <span className="text-designColor">RAS</span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            a{" "}
            <Typewriter
              words={words}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base text-lightText pr-32 font-medium">
            ...inspires robotics research and aspires to make robotics more accessible to persons of all backgrounds. Since 1997, from our primary residence in UT's Electrical and Computer Engineering department, we have connected undergraduate students from mechanical, electrical, aerospace, computer, and other engineering (and non-engineering) fields. We help students gain practical multi-disciplinary experience in the lab, then demonstrate our abilities at various robotics competitions while promoting robotics via community outreach.
          </p>
          <Button className="w-40 h-14" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
