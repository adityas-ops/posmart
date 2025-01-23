/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../context/CartContext";

import React from "react";
function Layout({ children }) {
  const {getCartItemCount} = useCart()
  const navLinks = [
    {
      title: "Home",
      route: "/",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.73049 2.78823C11.0005 1.77923 12.7805 1.73923 14.0895 2.66823L14.2505 2.78823L20.3395 7.65923C21.0095 8.17823 21.4205 8.94923 21.4905 9.78823L21.5005 9.98923V18.0982C21.5005 20.1882 19.8495 21.8882 17.7805 21.9982H15.7905C14.8395 21.9792 14.0705 21.2392 14.0005 20.3092L13.9905 20.1682V17.3092C13.9905 16.9982 13.7595 16.7392 13.4505 16.6882L13.3605 16.6782H10.6895C10.3705 16.6882 10.1105 16.9182 10.0705 17.2182L10.0605 17.3092V20.1592C10.0605 20.2182 10.0495 20.2882 10.0405 20.3382L10.0305 20.3592L10.0195 20.4282C9.90049 21.2792 9.20049 21.9282 8.33049 21.9892L8.20049 21.9982H6.41049C4.32049 21.9982 2.61049 20.3592 2.50049 18.2982V9.98923C2.50949 9.13823 2.88049 8.34823 3.50049 7.79823L9.73049 2.78823ZM13.3805 3.87823C12.6205 3.26823 11.5405 3.23923 10.7405 3.76823L10.5895 3.87823L4.50949 8.77923C4.16049 9.03823 3.95049 9.42823 3.90049 9.83823L3.88949 9.99823V18.0982C3.88949 19.4282 4.92949 20.5182 6.25049 20.5982H8.20049C8.42049 20.5982 8.61049 20.4492 8.63949 20.2392L8.66049 20.0592L8.67049 20.0082V17.3092C8.67049 16.2392 9.49049 15.3692 10.5405 15.2882H13.3605C14.4295 15.2882 15.2995 16.1092 15.3805 17.1592V20.1682C15.3805 20.3782 15.5305 20.5592 15.7305 20.5982H17.5895C18.9295 20.5982 20.0195 19.5692 20.0995 18.2582L20.1105 18.0982V9.99823C20.0995 9.56923 19.9205 9.16823 19.6105 8.86923L19.4805 8.75823L13.3805 3.87823Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Dashboard",
      route: "/dashboard",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Cart",
      route: "/cart",
      svg: <IoCartOutline className="text-[24px]" />,
    },
    {
      title: "Notification",
      route: "/notification",
      svg: <IoIosNotificationsOutline className="text-[24px]" />,
    },
    {
      title: "Setting",
      route: "/setting",
      svg: <IoSettingsOutline className="text-[24px]" />,
    },
  ];
  return (
    <div className=" w-full h-screen bg-[#393C49]  flex overflow-hidden ">
      {/* for desktop */}
      <nav className="w-[100px] hidden     bg-[#1F1D2B] pl-[16px] pr-[0.2px] rounded-r-[18px] sm:flex flex-col items-center ">
        <NavLink to="/">
          <div className="p-[24px] h-[100px] w-full rounded-r-[15px] bg-[#1F1D2B] ">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.26"
                width="56"
                height="56"
                rx="12"
                fill="#EB966A"
              />
              <path
                d="M39.6668 11.3334H16.3335C13.5768 11.3334 11.3335 13.5767 11.3335 16.3334V21.0517C11.3335 22.8067 11.9702 24.4017 13.0002 25.6284V41.3334C13.0002 41.7754 13.1758 42.1993 13.4883 42.5119C13.8009 42.8244 14.2248 43 14.6668 43H28.0002C28.4422 43 28.8661 42.8244 29.1787 42.5119C29.4912 42.1993 29.6668 41.7754 29.6668 41.3334V33H36.3335V41.3334C36.3335 41.7754 36.5091 42.1993 36.8216 42.5119C37.1342 42.8244 37.5581 43 38.0002 43H41.3335C41.7755 43 42.1994 42.8244 42.512 42.5119C42.8246 42.1993 43.0002 41.7754 43.0002 41.3334V25.6267C44.0302 24.4017 44.6668 22.8067 44.6668 21.05V16.3334C44.6668 13.5767 42.4235 11.3334 39.6668 11.3334ZM41.3335 16.3334V21.0517C41.3335 22.9517 39.9185 24.5717 38.1818 24.6634L38.0002 24.6667C36.1618 24.6667 34.6668 23.1717 34.6668 21.3334V14.6667H39.6668C40.5868 14.6667 41.3335 15.415 41.3335 16.3334ZM24.6668 21.3334V14.6667H31.3335V21.3334C31.3335 23.1717 29.8385 24.6667 28.0002 24.6667C26.1618 24.6667 24.6668 23.1717 24.6668 21.3334ZM14.6668 16.3334C14.6668 15.415 15.4135 14.6667 16.3335 14.6667H21.3335V21.3334C21.3335 23.1717 19.8385 24.6667 18.0002 24.6667L17.8185 24.6617C16.0818 24.5717 14.6668 22.9517 14.6668 21.0517V16.3334ZM24.6668 34.6667H18.0002V29.6667H24.6668V34.6667Z"
                fill="url(#paint0_linear_407_5117)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_5117"
                  x1="28.0002"
                  y1="11.3334"
                  x2="28.0002"
                  y2="43"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EA9769" />
                  <stop offset="1" stopColor="#EA6969" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </NavLink>
        {navLinks.map((link) => (
          <div className="relative" key={link.route}>
          <NavLink
          id="my-anchor-element-id" data-tooltip-content={link.title} 
            to={link.route}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? "text-black  w-[102px] duration-500 h-[100px] bg-[#252836] rounded-l-[12px] flex items-center justify-center relative"
                : "text-black relative w-[102px] h-[100px] duration-500 flex rounded-r-[12px] items-center justify-center "
            }
          >
            {({ isActive }) =>
              isActive ? (
                <div className="w-[56px] h-[56px] bg-orange-400 rounded-[8px] flex items-center justify-center text-white">
                  {link.svg}
                </div>
              ) : (
                <div  className="w-[56px] h-[56px]  rounded-[8px] flex items-center justify-center text-white">
                  {link.svg}
                </div>
              )
            }
          </NavLink>
           {
            link.route === "/cart"  && (
              <div className="absolute top-4 left-4 bg-red-700 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center">
                {getCartItemCount()}
              </div>
            )
           }
          </div>
        ))}
      </nav>
      <main className="w-full bg-[#252836] px-[10px] sm:px-[30px] h-full overflow-y-scroll ">
        {children}
      </main>
      {/* for mobile navigation */}
      <nav className="w-full h-[60px] z-50 fixed bottom-0 left-0 right-0 bg-[#1F1D2B] flex items-center justify-between gap-x-[4px] sm:hidden ">
        {navLinks.map((link) => (
          <NavLink
          
            to={link.route}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? " w-full   h-full duration-500  bg-orange-400 text-white  flex flex-col items-center justify-center relative  "
                : " text-orange-400 relative w-full h-full  duration-500 flex  items-center justify-center flex-col "
            }
          >
            {link.svg}
            <p className=" text-[12px]">{link.title}</p>
            {
            link.route === "/cart"  && (
              <div className="absolute top-1 right-1 bg-red-700 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center">
                {getCartItemCount()}
              </div>
            )
           }
          </NavLink>
        ))}
      </nav>
      <Tooltip  
      anchorSelect="#my-anchor-element-id"
      place="right"
      style={{ backgroundColor: "#FF6900", color: "#fff" }}
       />
    </div>
  );
}

export default Layout;
