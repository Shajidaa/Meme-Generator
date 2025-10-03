import React, { useEffect, useState } from 'react';




const InputFields = () => {
  const [meme,setMeme]=useState({
    topText:'wow',
    bottomText:" You're so beautiful",
    
    imgUrl:"../../public/cat.jpg" ,
  });

  const handleChange=(e)=>{
    
    // const value=e.target.value;
    // console.log(value );
    const {value,name}=e.currentTarget;
    console.log(value,name);
    
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    setMeme (prev=>({
    ...prev,
      [name]:value}))
      // console.log(value ,name);
  }
const [allMemes,setAllMemes]=useState([])
 
     useEffect(()=>{
    fetch( `https://api.imgflip.com/get_memes`)
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
  },[])

function getMemeImage(){
  const randomNumber=Math.floor(Math.random()*allMemes.length)
  const newMemeUrl=allMemes[randomNumber].url
  // console.log(newMemeUrl);
  
  setMeme(prevMeme =>({
    ...prevMeme,
    imgUrl:newMemeUrl
  }))
}


    return (
        <div className='md:mt-7 mt-5 px-7   flex flex-col bg-white'>
        <div className='flex flex-row justify-between gap-5 '>
            <fieldset className="fieldset w-full ">
                 <legend className="fieldset-legend">Top Text </legend>
                <input type="text"  name='topText' onChange={handleChange}
                className="input w-full" placeholder='wow' />
            </fieldset>
            <fieldset className="fieldset w-full ">
                 <legend className="fieldset-legend">Bottom Text</legend>
                <input type="text"  name='bottomText' onChange={handleChange}
                className="input w-full " placeholder=" You're so beautiful"/>
            </fieldset>

      </div>
      <div className='w-full mt-3.5 '>
        <button onClick={getMemeImage}
         className='btn rounded-xl py-2
         text-white bg-gradient-to-r from-[#672280] to-[#A626D3]
          w-full '>Get a new meme image  🖼</button>
      </div>
      <div className='bg-center mt-5 max-w-full relative' >
        <img className='   object-contain' src={meme.imgUrl} alt="" />
      <span className=' span
                      top-0  '>{meme.topText}</span>
      <span className=' span
                  bottom-0  '>{meme.bottomText}</span>
      </div>
        </div>
    );
};

export default InputFields; 