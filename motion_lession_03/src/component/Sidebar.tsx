import { Contact, Home, Menu, SidebarClose, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "motion/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const item = [
    {
      icon: <Home className="text-neutral-600  size-7  shrink-0 p-1 " />,
      text: "Home",
      link: "/",
    },
    {
      icon: <User className="text-neutral-600 size-7 shrink-0 p-1" />,
      text: "About Us",
      link: "/aboutus",
    },
    {
      icon: <Contact className="text-neutral-600 size-7 shrink-0 p-1" />,
      text: "Contact Us",
      link: "/contactus",
    },
  ];

  const sidebarVariant = {
    open: {
      width: "12rem",
    },
    closed: {
      width: "4rem",
    },
  };

  const menuTextVariant = {
    open: {
      opacity: 1,
      x: 0,
      width: "auto",
      transition: {
        duration: 0.3,
        delay: 0.19,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      width: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.aside
      initial={false}
      animate={isOpen ? "open" : "closed"}
      transition={{
        duration: 0.4,
      }}
      variants={sidebarVariant}
      className={`  z-50  p-4  h-screen sticky top-0 self-start  bg-neutral-100 `}
    >
      <div className="flex justify-between  items-center">
        <Menu
          onClick={() => setIsOpen(true)}
          className="size-8 rounded p-1 hover:bg-neutral-200 cursor-pointer"
        />
        <SidebarClose
          onClick={() => setIsOpen(false)}
          className={`text-neutral-600 size-7 rounded hover:bg-neutral-200 p-1  cursor-pointer ${isOpen ? "block" : "hidden"}`}
        />
      </div>
      <ul className={`space-y-6   mt-8`}>
        {item.map((val, idx) => (
          <li key={idx}>
            <Link
              to={`${val.link}`}
              className={`flex   cursor-pointer rounded gap-4   items-center `}
            >
              {val.icon}
              <div className="overflow-hidden">
                <motion.p
                  variants={menuTextVariant}
                  className="text-sm  text-neutral-700 font-medium whitespace-nowrap"
                >
                  {val.text}
                </motion.p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
