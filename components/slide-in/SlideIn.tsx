"use client";

import { cn } from "@/lib/utils";
import { Grid, Hourglass, Palette } from "lucide-react";
import { useState } from "react";
import ThemeTab from "./components/ThemeTab";
import TimerTab from "./components/TimerTab";

type MenuItem = "Timer" | "Theme" | "Widgets";
interface MenuItems {
  name: MenuItem;
  icon: React.ReactNode; //gotta find typing
}

const menuItems: MenuItems[] = [
  { name: "Timer", icon: <Hourglass /> },
  { name: "Theme", icon: <Palette /> },
  { name: "Widgets", icon: <Grid /> },
];

const SlideIn = () => {
  const [menu, setMenu] = useState<MenuItem>("Timer");

  const handleMenuChange = (name: MenuItem) => {
    setMenu(name);
  };

  return (
    <div className="slide-in">
      <h3 className="text-primary font-bold pb-8">Settings</h3>
      <nav className="flex gap-4 pb-8">
        {menuItems.map((item) => (
          <div
            className={cn(
              "flex cursor-pointer",
              menu === item.name ? "text-primary" : "text-muted"
            )}
            onClick={() => handleMenuChange(item.name)}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </nav>
      {menu === "Timer" && <TimerTab />}
      {menu === "Theme" && <ThemeTab />}
    </div>
  );
};

export default SlideIn;
