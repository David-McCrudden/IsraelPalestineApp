import React, {useState} from 'react'
import  {url_list, text_list, title_list} from "../variables.js";
import Slider from '@mui/material/Slider';

import '../styles/Home.css'


function Home() {
  const [counter, setCounter] = useState(0);

  function valuetext(value, index) {
    //return `${value}°C`;
    //return title_list[index];
    return `${title_list[value]}`
  }

  //<input onMouseMove={changeCounter} type="range" id="myRange" min="0" max="10" step="1" class="slider"></input>
  return (
    <div>
    <body id="body" style={{ backgroundColor: '#FFFFFF' }}>
          <h1 className="heading"> Timeline of Israel's Borders </h1>
          <h1> {}</h1>
          <div className = "sliderdiv"><Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            onChange ={(_,v)=>setCounter(v)}
          /></div>
          <div className="parentdiv">

            <div className="division1" style={{ backgroundColor: '	#0038b8' }}>
              <img src={url_list[counter]} alt="" width="640px" height="640px"></img>
            </div>
            <div className="division2" style={{ width: '35%', color: 'black' }}>
              <h3>{text_list[counter]}</h3>
            </div>
          </div>
        </body>
    </div>
  )
}

export default Home;