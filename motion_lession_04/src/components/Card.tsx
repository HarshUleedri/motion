import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "motion/react";
import { useRef } from "react";

interface item {
  icon: string;
  subText: string;
  title: string;
  description: string;
  image: string;
}

const Card = ({ item }: { item: item }) => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.6, 0.8, 1, 0.8, 0.6],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.1, 1, 0.1, 0],
  );
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [50, 8, 0, 8, 50],
  );

  const filter = useMotionTemplate`blur(${blur}px)`;
  return (
    <motion.div
      style={{
        scale,
        filter,
        opacity,
      }}
      ref={cardContainerRef}
      key={item.title}
      className="grid max-w-5xl mx-auto items-center  text-neutral-100 grid-cols-2 gap-20"
    >
      <motion.div
        style={{
          y: translateContent,
        }}
        className=""
      >
        <div className="flex items-center mb-6 gap-1 bg-neutral-600 py-1 border w-fit rounded-full  px-3">
          <span className="text-sm leading-5 ">{item.icon}</span>
          <p className="text-sm font-medium ">{item.subText}</p>
        </div>
        <h2 className="text-5xl font-medium mb-4">{item.title}</h2>
        <p>{item.description}</p>
      </motion.div>
      <div className="">
        <img
          className="size-full object-cover rounded-xl aspect-video"
          src={item.image}
          alt={item.subText}
        />
      </div>
    </motion.div>
  );
};

export default Card;
