// Skeleton.tsx
import React from "react";

const Skeleton: React.FC = () => {
  const skeletonCards = Array.from({ length: 12 }); // create an empty Arr[12]

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-20">
      {skeletonCards.map((_, index) => (
        <div className="flex w-52 flex-col gap-4" key={index}>
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
