"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <>
      <Button
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`${
          theme === "light" ? "bg-white" : "bg-black"
        } hover:bg-gray-600`}
      >
        <Sun className="h-4 w-4 rotate-0 text-black  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 text-white scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
}
