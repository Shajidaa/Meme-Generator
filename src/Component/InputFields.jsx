import React from 'react';
import img from "../assets/3oevdk.jpg"
const InputFields = () => {
    return (
        <div className='md:mt-7 mt-5 px-7 flex flex-col'>
        <div className='flex flex-row justify-between gap-5 '>
            <fieldset className="fieldset w-full ">
                 <legend className="fieldset-legend">Top Text </legend>
                <input type="text" className="input w-full" placeholder="Type here" />
            </fieldset>
            <fieldset className="fieldset w-full ">
                 <legend className="fieldset-legend">Bottom Text</legend>
                <input type="text" className="input w-full " placeholder="Type here" />
            </fieldset>

      </div>
      <div className='w-full mt-3.5 '>
        <button className='btn rounded-xl py-2
         text-white bg-gradient-to-r from-[#672280] to-[#A626D3]
          w-full '>Get a new meme image  🖼</button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
        </div>
    );
};

export default InputFields; 