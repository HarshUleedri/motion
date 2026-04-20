import { useScroll, motion, useTransform } from "motion/react";
import Card from "./components/Card";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const App = () => {
  //lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const contents: {
    icon: string;
    subText: string;
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      icon: "🚀",
      subText: "Fast Performance",
      title: "Speed Optimized",
      description:
        "Our app is built for blazing fast performance and smooth user experience.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      icon: "🎨",
      subText: "Beautiful UI",
      title: "Modern Design",
      description: "Clean and modern design that looks great on all devices.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      icon: "🔒",
      subText: "Secure",
      title: "Top Security",
      description:
        "We ensure your data is safe with industry-standard security practices.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      icon: "⚡",
      subText: "Instant Load",
      title: "Quick Response",
      description:
        "Experience lightning-fast load times with optimized performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      icon: "🌐",
      subText: "Global Access",
      title: "Worldwide Reach",
      description: "Access our platform anytime, anywhere across the globe.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundArray: string[] = [
    "#003049",
    "#432818",
    "#001d3d",
    "#293241",
    "#1b4965",
  ];
  // const background = useMotionValue(backgroundArray[0]);
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    backgroundArray,
  );

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const backgroundData = Math.floor(latest * backgroundArray.length);
  //   console.log(backgroundData);
  //   background.set(backgroundArray[backgroundData]);
  // });

  return (
    <motion.div
      style={{
        background,
      }}
      ref={containerRef}
      className=" bg-neutral-800 flex flex-col gap-100 min-h-screen py-48 w-full"
    >
      {contents.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </motion.div>
  );
};

export default App;
