import { MessageSquareCheck, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Card = () => {
  const itemList = [
    {
      icons: <MessageSquareCheck size={14} />,
      title: "Harsh UI Component",
      subText: "A collection of UI components",
    },
    {
      icons: <MessageSquareCheck size={14} />,
      title: "Harsh UI Component",
      subText: "A collection of UI components",
    },
    {
      icons: <MessageSquareCheck size={14} />,
      title: "Harsh UI Component",
      subText: "A collection of UI components",
    },
    {
      icons: <MessageSquareCheck size={14} />,
      title: "Harsh UI Component",
      subText: "A collection of UI components",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            scale: 0.98,
            opacity: 0,
            filter: "blur(20px)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className=" shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-118 w-72 p-6 rounded-md border  border-neutral-200 flex flex-col"
        >
          <h2 className="text-sm font-semibold font-heading ">
            Harsh UI Components
          </h2>
          <p className="text-[10px] text-neutral-400 font-medium mt-2 mb-4">
            A Collection of beautiful UI components. Lets get on with it.
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="px-2 py-1 mb-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded text-xs w-fit self-center font-medium flex items-center gap-2 "
          >
            Champion UI
            <X className="size-3 text-neutral-500" />
          </button>
          <div className=" border border-dashed bg-gray-100 border-neutral-200 flex-1 rounded-md relative ">
            <motion.div
              initial={{
                scale: 0.98,
                opacity: 0,
                filter: "blur(10px)",
              }}
              whileHover={{
                scale: 1.02,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                // mass: 1,
              }}
              className="absolute inset-0 h-full w-full opacity-0  bg-white divide-y border border-neutral-200 rounded-md divide-neutral-300 "
            >
              {itemList.map((item, idx) => (
                <>
                  <div key={idx} className=" flex gap-4  p-4">
                    <div className=" p-2 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-fit rounded">
                      {item.icons}
                    </div>
                    <div className="flex flex-col">
                      <h6 className="text-xs font-semibold">{item.title}</h6>
                      <p className="text-[10px]">{item.subText}</p>
                    </div>
                  </div>
                </>
              ))}
              <div className="p-4 flex items-center justify-center gap-2">
                <div className=" p-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-fit rounded">
                  <Plus size={10} />
                </div>
                <div className="text-[10px] text-neutral-300">
                  create Project
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
