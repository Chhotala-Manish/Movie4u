import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      console.log("e.key === 'Enter' && query.length > 0");
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner w-full h-[450px] bg-[#04152d] flex items-center relative md:h-[700px] ">
        {!loading && (
          <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden ">
            <Img
              src={background}
              className="w-full h-full object-cover object-center  "
            />
          </div>
        )}
       {/*  <div
          className="opacity-layar w-full h-[250px] bottom-0 left-0 
bg-gradient-to-t from-transparent via-[#04152d00] to-[#04152d]  "
        ></div> */}
        {/* <ContentWrapper> */}
        <div className="contentWrapper w-full max-w-[1200px] px-5 mx-auto ">
          <div className="heroBannerCountent flex flex-col items-center text-white text-center relative max-w-[800px] mx-auto ">
            <span className="title text-[50px] font-bold mb-3 md:mb-0 md:text-[90px] ">
              Welcome.
            </span>
            <span className="subTitle text-[18px] font-medium mb-[40px] md:text-[24px] ">
              MIllions Of Movie, TV shows And People to discover. Explore now
            </span>
            <div className="searchInpute flex items-center w-full ">
              <input
                type="text"
                placeholder="Search for a movie or TV show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => searchQueryHandler(e)}
                className="w-[calc(100%-100px)] h-[50px] bg-white outline-0 border-0 rounded-tl-lg rounded-bl-lg px-[15px] text-[14px] ,md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:px-[30px] "
              />

              <button
                className="w-[100px] h-[50px] bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white outline-0 border-0 text-base md:w-[150px] md:h-[60px] md:text-lg 
rounded-r-3xl "
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* </ContentWrapper> */}
      </div>
    </>
  );
};

export default HeroBanner;
