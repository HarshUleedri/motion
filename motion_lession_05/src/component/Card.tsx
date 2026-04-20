import { motion } from "motion/react";

export interface item {
  image: string;
  title: string;
  subText: string;
  description: string;
  ctaLink: string;
  ctaText: string;
}

const Card = ({
  item,
  setCurrent,
}: {
  item: item;
  setCurrent: (data: item) => void;
}) => {
  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        setCurrent(item);
      }}
      layoutId={item.title}
      className="flex w-full bg-neutral-100 mb-6 rounded px-4 py-2 justify-between items-center"
    >
      <div className="flex gap-4  items-center justify-start">
        <motion.img
          layoutId={`card-img-${item.title}`}
          className="aspect-square w-20 rounded"
          src={item.image}
          alt={item.title}
        />

        <div className="text-start">
          <motion.h3
            layoutId={`card-title-${item.title}`}
            className="text-base font-semibold text-neutral-700"
          >
            {item.title}
          </motion.h3>
          <motion.p
            layoutId={`card-subtext-${item.title}`}
            className="text-sm text-neutral-400 font-medium"
          >
            {item.subText}
          </motion.p>
        </div>
      </div>
      <motion.div
        layoutId={`card-cta-${item.title}`}
        className=" bg-green-500 text-neutral-100 px-2 rounded text-xs py-1 cursor-pointer"
      >
        {item.ctaText}
      </motion.div>
    </motion.button>
  );
};

export default Card;
