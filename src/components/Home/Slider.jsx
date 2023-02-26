import React,{useState} from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Slider = () => {
  const silderImages = [
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="slider">
      <div className="slider__container" style={{transform:`translateX(-${current*100}vw)`}}>
        <img src={silderImages[0]} alt="" />
        <img src={silderImages[1]} alt="" />
        <img src={silderImages[2]} alt="" />
        <img src={silderImages[3]} alt="" />
      </div>
      <div className="slider__icons">
        <div className="slider__icons_icon">
            <IoMdArrowDropleft onClick={()=> setCurrent(prev =>prev === 0 ? 0:  prev - 1)} />
        </div>
        <div className="slider__icons_icon">
            <IoMdArrowDropright onClick={()=> setCurrent(prev => prev === 3 ? 3: prev + 1)} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
