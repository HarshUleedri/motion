import { Loader2 } from "lucide-react";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

export const SuccessSequenceButton = ({
  text,
  style,
}: {
  text: string;
  style?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const animateOnClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    animate(
      "span",
      {
        display: "none",
      },
      {
        duration: 0.01,
      },
    );
    await animate(
      ".loading",
      {
        display: "block",
      },
      {
        duration: 1,
      },
    );

    await animate(
      ".loading",
      {
        display: "none",
      },
      {
        duration: 0.7,
      },
    );

    await animate(
      "button",
      {
        width: "4rem",
        height: "4rem",
        borderRadius: "10rem",
        background: "lightgreen",
      },
      {
        duration: 0.3,
      },
    );
    await animate(
      "button",
      {
        scale: [1, 0.9, 1.2, 1],
      },
      {
        duration: 0.6,
      },
    );
    await animate(
      ".check-icon",
      {
        display: "block",
      },
      {
        duration: 0.2,
      },
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 1,
      },
    );
  };

  return (
    <div ref={scope}>
      <button
        disabled={isLoading}
        onClick={animateOnClick}
        className={`${style} h-10 w-[15rem] flex items-center justify-center cursor-pointer text-base font-medium bg-purple-300  rounded    ${isLoading ? "pointer-events-none " : "cursor-pointer"}`}
      >
        <Loader2 className="loading hidden text-black animate-spin" />

        <span className="whitespace-nowrap">{text}</span>
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width={3}
          className=" hidden size-8  h-full p-2 pointer-events-none w-full rounded-full m-auto check-icon text-white "
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </button>
    </div>
  );
};
