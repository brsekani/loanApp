import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { useEffect, useState } from "react";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock / unlock body scroll when sidebar opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden lg:block">
        <DesktopSidebar />
      </div>
      <div className="w-full flex">
        <div className="overflow-hidden w-full lg:ml-[280px]">
          <div className={` min-h-[75vh] w-full`}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="bg-[#F9FAFB] w-full min-h-[calc(100vh-80px)] md:px-8 px-5 pt-[150px] lg:pt-[80px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
