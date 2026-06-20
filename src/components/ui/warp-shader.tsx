import { Warp } from "@paper-design/shaders-react";

export const WARP_SHADER_COLORS = [
  "hsl(200, 100%, 20%)",
  "hsl(160, 100%, 75%)",
  "hsl(180, 90%, 30%)",
  "hsl(170, 100%, 80%)",
] as const;

interface WarpShaderBackgroundProps {
  className?: string;
  overlayOpacity?: number;
}

export function WarpShaderBackground({
  className = "",
  overlayOpacity = 0.35,
}: WarpShaderBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={1}
        colors={[...WARP_SHADER_COLORS]}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `hsl(200 100% 8% / ${overlayOpacity})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,100%,8%)] via-[hsl(200,100%,8%)/0.15] to-[hsl(200,100%,8%)/0.45]" />
    </div>
  );
}
