import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[15px] text-white font-bold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;