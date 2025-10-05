import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import {IconSun, IconMoon} from "@tabler/icons-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(()=> localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.clear()
    }
  }, [dark]);

  return (
    <>
      <Switch className="max-md:hidden cursor-pointer" checked={dark} onClick={() => setDark(!dark)}></Switch>

      {dark ? (
        <IconSun onClick={() => setDark(false)} className="md:hidden size-[20px] cursor-pointer"/>
      ) : (
        <IconMoon onClick={() => setDark(true)} className="md:hidden size-[20px] cursor-pointer"/>
      )}
    </>
  );
}
