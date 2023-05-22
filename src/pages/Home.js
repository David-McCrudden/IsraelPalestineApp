import React, {useState} from 'react'
import  {url_list, text_list, text2_list, title_list, url2_list} from "../variables.js";
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
    
    <body id="body" style={{ backgroundColor: '#FFFFFF' }}>
         
          <h1> {}</h1>
          <div className = "sliderdiv"><Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={11}
            onChange ={(_,v)=>setCounter(v)}
          /></div>
          <div className="parentdiv">

            <div className="division1" style={{ backgroundColor: '	#5C5CFF' }}>
              <img src={url_list[counter]} className = "bigImg" alt="" ></img>
            </div>
            <div className="division2" style = {{backgroundColor: '#D3D3D3'}}>
              <h3 style={{ color: 'black' }}>{text_list[counter]}</h3>
              <img src={url2_list[counter]} className = "smImg" alt="" ></img>
              <h3 style={{ color: 'black' }}>{text2_list[counter]}</h3>
            </div>
          </div>
        </body>
    
  )
}

export default Home;