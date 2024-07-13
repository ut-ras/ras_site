import React from "react";
import Container from "./Container";
import RasImg from "../assets/banner.png";
import Button from "@/components/Button";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { Link } from "react-router-dom";
import links from "@/constant/links.json";

const About = () => {
  return (
    <Container className="flex justify-between ">
      {/* Left part */}
      <div className="w-[60%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
        <div className="h-[500px] overflow-hidden rounded-md">
          <img
            src={RasImg}
            alt="RasImg"
            className="h-full group-hover:scale-110 duration-500 rounded-md"
          />
        </div>
      </div>
      {/* Right part */}
      <div className="w-[35%] flex flex-col justify-center gap-7">
        <Subtitle title="About" />
        <Title title="IEEE Robotics and Automation Society" />
        <p>
          Dr. Laura Jerry brings a wealth of experience and expertise to her
          practice. With a focus on patient-centered care, she is known for her
          warm and empathetic approach, always taking the time to listen to her
          patients’ concerns. Her extensive medical knowledge and dedication to
          staying at the forefront of the field make her a trusted healthcare
          partner.
        </p>
        <p>
          Explore the range of medical services Dr. Collins offers, including
          general check-ups, preventative care, chronic disease management, and
          more. She is committed to working with you to develop personalized
          treatment plans that suit your unique needs.
        </p>
        <Button title="Learn more" className="w-40 h-14" />
      </div>
    </Container>
  );
};

export default About;
