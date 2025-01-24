import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CiBookmarkMinus } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { IoArrowUpCircle } from "react-icons/io5";
import Table from "../components/Table";

const stats = [
  {
    id: 1,
    name: "Total Revenue",
    value: 10243.0,
    icon: <HiOutlineCurrencyDollar className="text-[24px] text-[#9288e0]" />,
    increase: true,
    percentage: 32.4,
  },
  {
    id: 2,
    name: "Total Bookings",
    value: 23456.0,
    icon: <CiBookmarkMinus className="text-[24px] text-[#FFB572]" />,
    increase: false,
    percentage: -12.4,
  },
  {
    id: 3,
    name: "Total Customers",
    value: 1234,
    icon: <IoPeople className="text-[24px] text-[#65B0F6]" />,
    increase: true,
    percentage: 2.4,
  },
];




function Dashboard() {
  return (
    <Layout>
      <div className=" w-full pt-[40px] h-full">
        <h1 className="sm:text-2xl text-xl text-white font-bold">Dashboard</h1>
        <p className="text-gray-300 text-sm sm:text-base">Tuesday, 25Jan 2025</p>
        <div className="mt-[30px] border-[0.5px] border-gray-700"></div>
        <div className=" w-full max-w-full  sm:max-w-[80%] mx-auto h-full">
        <div className=" mt-[20px] w-full grid grid-cols-1 sm:grid-cols-3 gap-[15px] sm:gap-[40px]">
          {stats.map((stat) => (
            <StatsCard key={stat.id} {...stat} />
          ))}
        </div>
        <div className=" w-full h-full overflow-y-scroll overflow-x-scroll hideScrollBar mt-[20px]">
            <Table/>
        </div>
        </div>
      </div>
    </Layout>
  );
}

const StatsCard = ({ name, value, icon, increase, percentage }) => {
  return (
    <div className="bg-[#1F1D2B] p-4 rounded-lg ">
      <div className="flex items-center gap-[10px]">
        <div className="bg-[#252836] rounded-[8px] w-[38px] h-[38px] flex items-center justify-center">
          {icon}
        </div>

        <p
          className={`text-base flex items-center gap-[6px] ${
            increase ? "text-[#50D1AA]" : "text-[#FF7CA3]"
          }`}
        >
          {percentage}%
          <IoArrowUpCircle
            className={`text-[24px] ${
              increase ? "text-[#50D1AA]" : "text-[#FF7CA3] rotate-180"
            } `}
          />
        </p>
      </div>
      <div className=" flex flex-col mt-4">
        <h1 className=" text-2xl sm:text-3xl font-bold text-white">
          {name === "Total Revenue" && "$"}
          {value}.00
        </h1>
        <p className="text-gray-300">{name}</p>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
  increase: PropTypes.bool.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Dashboard;
