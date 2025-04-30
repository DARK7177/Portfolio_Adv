import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">Home</a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">About</a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">Projects</a>
            </Typography>
        </ul>
    );

    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                        Dark
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                                <span>Contact Me</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
