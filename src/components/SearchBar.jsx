import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
function SearchBar() {

    
  return (
    <div className="bg-[#292F3A] flex py-2 px-2 w-[350px]  mt-10 pd-2 items-center gap-3 h-10 rounded-md">
      <div className=" flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        
        <div>
          <input
            type="text"
            placeholder="Search Song, Artist"
            className="bg-transparent text-lg font-normal focus:outline-none text-white w-full"
          />
        </div>
      </div>
      <div>
          <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-l" />
        </div>
    </div>
  );
}

export default SearchBar;
