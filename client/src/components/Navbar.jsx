import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  Tooltip,
} from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navTextColor = theme === "dark" ? "text-white" : "text-gray-800";
  const logoTextColor = theme === "dark" ? "text-white" : "text-gray-900";

  const navList = (
    <ul className={`mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 ${navTextColor}`}>
      {["Home", "About", "Projects"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          className="p-1 font-normal"
          style={{ fontFamily: "Roboto Slab" }}
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div>
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 shadow-none"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, #0b0f17 0%, #121a24 50%, #0b0f17 100%)"
              : "linear-gradient(90deg, #dcecec 0%, #e0efed 50%, #dcecec 100%)",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <Typography
            as="a"
            href="#"
            className={`mr-4 cursor-pointer py-1.5 font-bold text-lg ${logoTextColor}`}
            style={{ fontFamily: "Roboto Slab" }}
          >
            Dark
          </Typography>

          <div className="hidden lg:flex items-center gap-x-2">{navList}</div>

          <div className="hidden lg:flex items-center gap-x-2">
            <Button
              variant="gradient"
              size="sm"
              className="bg-blue-500 rounded-md cursor-pointer"
              style={{ fontFamily: "Roboto Slab" }}
              onClick={() => setPanelOpen(true)}
            >
              <span>Contact Me</span>
            </Button>

            <Tooltip
              content={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
              placement="bottom"
              className={`z-[9999] px-3 py-1.5 text-sm font-medium transition-all duration-200
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black border border-gray-300"}`}
            >
              <IconButton
                variant="text"
                onClick={toggleTheme}
                className={`rounded-full p-2 transition-colors duration-300
          ${theme === "dark" ? "text-yellow-300 hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </IconButton>
            </Tooltip>

          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit lg:hidden cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? "✕" : "☰"}
          </IconButton>
        </div>
      </Navbar>

      <div
        className={`fixed top-0 right-0 z-20 h-full w-77 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          } shadow-lg transform transition-transform duration-300 ease-in-out ${isPanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <Card className="p-6 h-full rounded-none bg-inherit shadow-none">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h5">Let's Connect</Typography>
            <Button
              variant="text"
              size="sm"
              className="text-red-500 cursor-pointer"
              onClick={() => setPanelOpen(false)}
            >
              ✕
            </Button>
          </div>
          <div>
            <Typography className="mb-2">
              You can reach me via Email, LinkedIn or Phone.
            </Typography>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email : Darkbawa77@gmail.com</li>
              <li>
                LinkedIn:{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Profile
                </a>
              </li>
              <li>Phone: 0122225555</li>
            </ul>
          </div>
        </Card>
      </div>

      {isPanelOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-30"
          onClick={() => setPanelOpen(false)}
        />
      )}
    </div>
  );
}
