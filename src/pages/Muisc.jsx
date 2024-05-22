import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import time from "../assets/time.svg";
function Muisc() {
  const params = useParams();
  const token = localStorage.getItem("token");
  const [dataMain, setDataMain] = useState([]);
  useEffect(() => {
    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setDataMain(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  console.log(dataMain);
  return (
    <div className="Muisc_wrapper felex-col  bg-[#121212]">
      <div className=" mw-[988px] pt-[100px]  bg-gradient-to-b from-[#cade2f] from-2% via-[#8b8b3d] via-5% to-[#121212] to-100%  bg-100% ">
        <div className="flex p-16 gap-10 mw-[988px] items-center">
          <div>
            <img className="w-[297px] h-[297px] " />
          </div>
          <div>
            <span className="text-white text-[16px]">PUBLIC PLAYLIST</span>
            <h3 className="uppercase text-[100px] text-white font-bold">
              {dataMain.name}
            </h3>
            <p className="text-white">{dataMain.description}</p>
          </div>
        </div>
      </div>
      <div className="musics mw-[988px]">
        <div className="musics_header mw-[988px] mx-auto flex imtems-center text-[#B3B3B3] justify-between p-4 border-b mb-[22px]">
          <p className=" "># TITLE</p>
          <div className="sdsdsd w-[63%] flex items-center justify-between">
            <p>ALBUM</p>
            <p>DATE ADDED</p>
            <img src={time} alt="" />
          </div>
        </div>
        <div className="music_wrapper flex flex-col px-4">
          {dataMain?.tracks?.items && dataMain?.tracks?.items?.map((el, index) => (
            <div
              className="music_card text-[#B3B3B3] flex items-center justify-between cursor-pointer mb-4 hover:bg-[black] p-3"
              key={index}
            >
              <div className="flex items-center justify-between ">
                <div className="music_title flex items-center w-[299px] gap-[11px] ">
                  <p className="text-xl">{index + 1}</p>
                  <img src={el.track.album?.images[0].url} alt="" className="w-[52px] h-[52px]" />
                  <div className="">
                    <p className="text-[#fff] text-lg">{el.track.name}</p>
                    <p>{el.track.artists[0]?.name}</p>
                  </div>
                </div>
                <p>{el.track.album.album_type}</p>
              </div>
              {el.track.preview_url ? (
                <audio controls>
                    <source src={el.track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : <>No music is played</>}
              <p className="text-[#fff] text-lg">{Math.floor(el.track.duration_ms / 60000)}:{((el.track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Muisc;
