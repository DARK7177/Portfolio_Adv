import React, { useState, useEffect } from "react";
import { Navbar, Typography, Button, IconButton, Card } from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-white">
      {['Home', 'About', 'Projects'].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          <a href="#" className="flex items-center">{item}</a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4" style={{background: 'linear-gradient(90deg, rgba(8, 20, 29, 1) 0%, rgba(15, 25, 35, 1) 50%, rgba(8, 20, 29, 1) 100%)'}}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
            style={{ fontFamily: 'Roboto Slab' }}
          >
            Dark
          </Typography>
          <div className="hidden lg:flex items-center gap-x-2">
            {navList}
          </div>
          <div className="hidden lg:flex items-center gap-x-1">
            <Button variant="gradient" size="sm" className="bg-blue-500 rounded-md cursor-pointer"style={{ fontFamily: 'Roboto Slab' }} onClick={() => setPanelOpen(true)}>
              <span>Contact Me</span>
            </Button>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit lg:hidden cursor-pointer"
            onClick={() => setPanelOpen(!openNav)}
          >
            {openNav ? '✕' : '☰'}
          </IconButton>
        </div>
      </Navbar>

      <div className={`fixed top-0 right-0 z-20 h-full w-77 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Card className="p-6 h-full rounded-none">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h5">Let's Connect</Typography>
            <Button variant="text" size="sm" className="text-red-500 cursor-pointer" onClick={() => setPanelOpen(false)}>✕</Button>
          </div>
          <div>
            <Typography className="mb-2">
              You can reach me via Email, LinkedIn or Phone.
            </Typography>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email : Darkbawa77@gmail.com</li>
              <li>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/bhupesh-kumar-46530424a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
          className="fixed inset-0 z-10 bg-black bg-opacity-30 "
          onClick={() => setPanelOpen(false)}
        />
      )}
    </div>
  );
}
