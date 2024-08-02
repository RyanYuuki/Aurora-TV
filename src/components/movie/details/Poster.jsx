import React from "react";

const Poster = ({ src }) => {
  return (
    <div className="w-full" >
      <img className="w-full object-cover object-top h-[400px]" src={src} alt="" />
    </div>
  );
};

export default Poster;
