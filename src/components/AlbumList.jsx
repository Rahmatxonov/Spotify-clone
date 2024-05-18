import React from "react";
import "./AlbumList.css";
const AlbumList = ({ item }) => {
  return (
    <div class="book mt-[50px]">
      <span>
        <p>{item.name}</p>
        <p>{item.uri.name}</p>
      </span>
      <div class="cover">
        <img src={item.img} alt="image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AlbumList;
