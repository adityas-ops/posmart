import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { CiSearch } from "react-icons/ci";
import data from "../data";
import Card from "../components/Card";

function Home() {
  const filter = [
    {
      name: "All",
      id: 0,
    },
    {
      name: "Fitness & Wellness",
      id: 1,
    },
    {
      name: "Therapy & Counseling",
      id: 2,
    },
    {
      name: "Workshops",
      id: 3,
    },
    {
      name: "Educational Services",
      id: 4,
    },
    {
      name: "Health & Beauty",
      id: 5,
    },
    {
      name: "Miscellaneous",
      id: 6,
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (id) => {
    setSelectedFilter(id);
  };
  const [filteredData, setFilteredData] = useState(data);

  console.log(filteredData);

  // now we will filter the data based on the selected filter
  useEffect(() => {
    if (selectedFilter === 0) {
      setFilteredData(data);
    } else {
      const newData = data.filter((category) => category.id === selectedFilter);
      setFilteredData(newData);
    }
  }, [selectedFilter]);

  // now we will filter the data based on the search input
  useEffect(() => {
    const newData = data.filter((category) => {
      if (category.category.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      const services = category.services.filter((service) =>
        service.name.toLowerCase().includes(search.toLowerCase())
      );
      if (services.length > 0) {
        return true;
      }
      return false;
    });
    setFilteredData(newData);
  }, [search]);

  return (
    <Layout>
      <div className=" w-full h-full overflow-hidden ">
        {/* name and search */}
        <div className=" w-full flex sm:flex-row flex-col-reverse justify-between items-center py-[10px]  sm:py-[30px]">
          {/* name and location */}
          <div className="flex sm:flex-col items-center justify-between flex-row w-full sm:w-fit mt-3 sm:mt-1">
            <h1 className="sm:text-[28px] text-[22px] font-mono tracking-tight text-gray-100">
              Jaegar Resto
            </h1>
            <p className="text-gray-200 mt-0.5 text-[14px]">
              Tueday: 25 Jan 2025
            </p>
          </div>
          <div className="sm:w-[320px] w-full h-[45px] flex items-center relative border border-zinc-400  bg-[#2D303E] rounded-lg">
            <div className="w-[40px] h-full flex justify-center items-center">
              <CiSearch className="text-white text-[22px]" />
            </div>
            <input
              type="text"
              placeholder="Search for Service or Category"
              className="w-full  h-full  py-2  text-white placeholder-gray-400 focus:outline-none"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        {/*  filter and data */} 
        <div className=" sm:px-[40px]   w-full hideScrollBar overflow-x-scroll h-[60px] flex justify-start items-center">
          {filter.map((item) => {
            return (
              <div
                onClick={() => handleFilter(item.id)}
                key={item.id}
                className={`px-5 my-2 py-2 cursor-pointer border border-zinc-400 rounded-lg mr-4
                ${
                  selectedFilter === item.id
                    ? "bg-[#EA7C69] border-orange-400"
                    : "bg-transparent"
                }
                `}
              >
                <p
                  className={` text-base font-mono tracking-tighter whitespace-nowrap font-semibold   ${
                    selectedFilter === item.id
                      ? "text-white "
                      : " text-white"
                  }`}
                >
                  {item.name}
                </p>
                {/* <div
                  className={`w-[70%] mt-1 h-[3px] rounded-lg ${
                    selectedFilter === item.id
                      ? "bg-orange-400"
                      : " bg-transparent"
                  }`}
                /> */}
              </div>
            );
          })}
        </div>
        <div className=" w-full h-full pb-[300px] hideScrollBar sm:pb-[200px] mt-[20px] overflow-y-scroll">
          <div className=" w-full grid grid-cols-1 sm:grid-cols-4 pr-4 gap-[20px]">
            {filteredData.map((category) => {
              return category.services.map((service) => {
                return <Card key={service.id} service={service} />;
              });
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
