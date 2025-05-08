import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData?: any;
  animationUrl?: string;
  width?: number | string;
  height?: number | string;
  speed?: number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  animationUrl,
  width = "100%",
  height = "100%",
  speed = 1,
  loop = true,
  autoplay = true,
  className = "",
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [jsonData, setJsonData] = React.useState<any>(animationData);

  useEffect(() => {
    // If animationUrl is provided, fetch the JSON data
    if (animationUrl && !animationData) {
      fetch(animationUrl)
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
        })
        .catch((error) => {
          console.error("Error loading Lottie animation:", error);
        });
    }
  }, [animationUrl, animationData]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed, lottieRef]);

  if (!jsonData && !animationUrl) {
    return null;
  }

  return (
    <div style={{ width, height }} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={jsonData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        renderer="svg"
      />
    </div>
  );
};

export default LottieAnimation;
