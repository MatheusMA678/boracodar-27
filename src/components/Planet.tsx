import Lottie from "lottie-react";
import PlanetAnimation from "../assets/planet.json";

export function Planet() {
  return (
    <div className="w-56 h-56 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-app-blueLight/70 blur-3xl rounded-full"></div>
      <Lottie animationData={PlanetAnimation} />
    </div>
  );
}