import React from "react";

const Popular = ({ el }) => {
  return (
    <div>
      {el.IsPopular ? (
        <div className="flex">
          <div className="flex flex-col items-center w-[10rem] h-[15rem] object-cover">
            <img
              className="w-full h-full rounded-lg"
              src={el.ImageUrl}
              alt=""
            />
            <p>{el.Name}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Popular;
