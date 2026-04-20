import { useEffect, useState } from "react";
import Card, { type item } from "./component/Card";
import UseOutsideClick from "./hooks/useOutsideClick";
import { motion } from "motion/react";

const App = () => {
  const listItem: {
    image: string;
    title: string;
    subText: string;
    description: string;
    ctaLink: string;
    ctaText: string;
  }[] = [
    {
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      title: "Blinding Lights",
      subText: "The Weeknd",
      description:
        "A synthwave hit with nostalgic 80s vibes and energetic beats.",
      ctaLink: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
      ctaText: "Listen Now",
    },
    {
      image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      title: "Shape of You",
      subText: "Ed Sheeran",
      description: "A catchy pop track with tropical house influences.",
      ctaLink: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
      ctaText: "Listen Now",
    },
    {
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
      title: "Levitating",
      subText: "Dua Lipa",
      description: "A disco-inspired pop anthem that's fun and upbeat.",
      ctaLink: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9",
      ctaText: "Listen Now",
    },
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      title: "Peaches",
      subText: "Justin Bieber",
      description: "A smooth R&B track with chill vibes and catchy hooks.",
      ctaLink: "https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI",
      ctaText: "Listen Now",
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Bad Guy",
      subText: "Billie Eilish",
      description: "A minimalist pop track with a dark and playful tone.",
      ctaLink: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
      ctaText: "Listen Now",
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      title: "Stay",
      subText: "The Kid LAROI & Justin Bieber",
      description: "An emotional pop hit with fast-paced rhythm and melody.",
      ctaLink: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20",
      ctaText: "Listen Now",
    },
  ];
  const [current, setCurrent] = useState<item | null>(null);

  const containerRef = UseOutsideClick(() => setCurrent(null));

  useEffect(() => {
    if (current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [current]);
  return (
    <div className=" max-w-xl  min-h-screen  mx-auto py-20">
      {current && (
        <motion.div
          initial={{
            filter: "blur(0)",
          }}
          animate={{
            filter: "blur(10)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed z-10 backdrop-blur-sm bg-black/50 overflow-hidden inset-0 "
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={current.title}
          ref={containerRef}
          className="fixed h-[500px] overflow-y-auto overscroll-contain z-20 p-4 rounded  space-y-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white"
        >
          <motion.img
            layoutId={`card-img-${current.title}`}
            className="aspect-square w-full  rounded"
            src={current.image}
            alt={current.title}
          />

          <div className="flex items-center justify-between">
            <div className="text-start">
              <motion.h3
                layoutId={`card-title-${current.title}`}
                className="text-base font-semibold text-neutral-700"
              >
                {current.title}
              </motion.h3>
              <motion.p
                layoutId={`card-subtext-${current.title}`}
                className="text-sm text-neutral-400 font-medium"
              >
                {current.subText}
              </motion.p>
            </div>

            <motion.div
              layoutId={`card-cta-${current.title}`}
              className=" bg-green-500 text-neutral-100 px-2 rounded text-xs py-1 cursor-pointer"
            >
              {current.ctaText}
            </motion.div>
          </div>
          <hr className="text-neutral-200" />
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 font-medium">description</span>
            <p className="text-sm text-neutral-500">{current.description}</p>
          </div>
        </motion.div>
      )}
      {listItem.map((item) => (
        <Card setCurrent={setCurrent} item={item} />
      ))}
    </div>
  );
};

export default App;
