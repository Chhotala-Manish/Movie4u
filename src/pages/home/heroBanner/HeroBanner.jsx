import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimage/Img";


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home)

  const {data, loading} = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

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
      <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={background} />
      </div>
        <div className="wrapper">
          <div className="heroBannerCountent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              MIllions Of Movie, TV shows And People to discover. Explore now
            </span>
            <div className="searchInpute">
              <input
                type="text"
                placeholder="Search for a movie or TV show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => searchQueryHandler(e)}
              />

              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
