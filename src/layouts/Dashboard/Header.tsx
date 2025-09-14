import { Bell, ChevronDown, LogOut, Menu, Search, User, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "@/assets/images/d920cc99a8a164789b26497752374a4d5d852cc9.jpg";

const Header = ({ isOpen, setIsOpen }: any) => {
  const [toggleProfile, setToggleProfile] = useState(false);

  const location = useLocation();
  const firstPath = location.pathname.split("/")[1]; // e.g. "/clients/23" => "clients"

  const title = sidebarLinks.find(
    (val) => val.link.replace("/", "") === firstPath
  );

  const toggleDrawer = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <section className="flex flex-col px-6 lg:px-8 fixed top-0 left-0 right-0 lg:left-[280px] z-0 bg-white pb-4 lg:pb-0">
      <div className="flex justify-between gap-3 items-center h-[60px] lg:h-[80px] shadow-custom3 relative">
        <div className="flex gap-6 w-full">
          <div className="w-full">
            <div className="lg:hidden text-[20px] leading-[120%] tracking-[-2%] font-semibold block text-primary font-merriweather">
              {title?.name}
            </div>

            <div className="max-w-[629px] w-full hidden lg:block relative">
              <input
                placeholder="Search here..."
                className="h-10 w-full pl-10 pr-3 outline-0 bg-[#F9FAFB] shadow-[0px_1px_2px_0px_#1018280D] rounded-[6px] text-[14px] leading-[145%] placeholder:text-[#667185]"
              />

              <Search
                className="absolute top-2 left-3 w-5 h-5"
                color="#475367"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center z-30">
          <button className="block lg:hidden" onClick={toggleDrawer}>
            {isOpen ? <X /> : <Menu />}
          </button>
          <button className="text-primary cursor-pointer bg-[#F0F2F5] lg:w-12 lg:h-12 w-7 h-7 flex items-center justify-center rounded-full outline-none">
            <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>

          <div className="flex items-center justify-center w-8 h-8 border-[1.5px] border-[#FFFFFF] rounded-full lg:w-10 lg:h-10 overflow-hidden">
            <img
              src={profileImage}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <button
            onClick={() => setToggleProfile((prev) => !prev)}
            className="lg:flex hidden items-center gap-2 outline-none cursor-pointer"
          >
            <div className="leading-[145%] w-[100px] text-start">
              <h4 className="text-[14px] text-[#667185] font-medium">
                David Imasuen
              </h4>
              <p className="text-[12px] text-[#98A2B3]">Credit Agent</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 ${toggleProfile ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <div className="absolute top-16 lg:top-20 right-4">
          {toggleProfile && (
            <div
              onClick={() => setToggleProfile(false)}
              className="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-30"
            ></div>
          )}
          <motion.div
            className="absolute right-3 w-[140px] py-3 px-3 bg-white shadow-md z-20 rounded-xl flex flex-col gap-2 "
            initial={{ y: "-50%", opacity: 0 }}
            animate={{
              y: toggleProfile ? "0%" : "-50%",
              opacity: toggleProfile ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
          >
            <button className="outline-none hover:bg-primary hover:text-white w-full h-[29px] text-[14px] leading-[145%] rounded-md transition-all duration-200 flex items-center justify-center gap-2 px-2">
              <User className="w-4 h-4" />
              <p>Profile</p>
            </button>
            <button className="outline-none hover:bg-primary hover:text-white w-full h-[29px] text-[14px] leading-[145%] rounded-md transition-all duration-200 flex items-center justify-center gap-2 px-2">
              <LogOut className="w-4 h-4" />
              <p>Logout</p>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:hidden block">
        <input
          placeholder="Search here..."
          className="h-10 w-full pl-10 pr-3 outline-0 bg-[#F9FAFB] shadow-[0px_1px_2px_0px_#1018280D] rounded-[6px] text-[14px] leading-[145%] placeholder:text-[#667185]"
        />
      </div>
    </section>
  );
};

export default Header;
