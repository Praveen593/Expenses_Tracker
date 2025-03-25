import React from "react";
import { Button } from "./button";
import Video from "next-video";
 
const HeroSection = () => {
  return(
   <div className="pd-20 mt-10 px-4">
        <div >
            <h1>
              Transform Your Finances with <br/>AI Magic
            </h1>
            <p>
            Effortlessly Track. Instantly Analyze. Smartly Save. With our cutting-edge AI, managing your money is no longer a chore – it's a breeze.
            </p>
            <div className="mt-1">
              <Button  size="lg" className="px-6">
              Get Started
              </Button>
            </div>
            <div>
              <Video />

            </div>
        </div>
    </div>
  );
}

export default HeroSection;