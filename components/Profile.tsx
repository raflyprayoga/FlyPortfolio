"use client";

import TiltedCard from "./TiltedCard";

interface ProfileProps {
  className?: string;
}

export default function Profile({
  className = "",
}: ProfileProps) {
  return (
    <div className={className}>
      <TiltedCard
        imageSrc="/profile.png"
        altText="Rafly Prayoga"
        captionText="Rafly Prayoga"
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.08}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div
            className="
              pointer-events-none
              absolute
              bottom-5
              left-5
              right-5
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                drop-shadow-lg
              "
            >
              Rafly Prayoga
            </p>

            <p
              className="
                mt-1
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/70
              "
            >
              Creative Developer
            </p>
          </div>
        }
      />
    </div>
  );
}