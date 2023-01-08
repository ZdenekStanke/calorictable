import React, {useEffect, useState} from "react";
import './App.css';
import pc1 from './energy.png';
import pc2 from './chicken.png';
import pc4 from './cheeseburger.png';
import pc3 from './apple.png';
import {Modal} from "./Modal";







function App() {

useEffect(()=> {
    let progressBar = document.querySelector(".circular-progress");

    let valueContainer = document.querySelector(".value-container");


    let progressValue = 0;
    let progressEndValue = 100;
    let speed = 10;

    let progress = setInterval(() => {
        progressValue++;
        console.log(valueContainer)
        valueContainer.innerHTML = `${progressValue}` + "%";
        progressBar.style.background = `conic-gradient(
      #0054fe ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
        if (progressValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
    let progressBar1 = document.querySelector(".circular-progress1");
    let valueContainer1 = document.querySelector(".value-container1");

    let progressValue1 = 0;
    let progressEndValue1 = 80;
    let speed1 = 10;

    let progress1 = setInterval(() => {
        progressValue1++;
        valueContainer1.textContent = `${progressValue1}%`;
        progressBar1.style.background = `conic-gradient(
      dodgerblue ${progressValue1 * 3.6}deg,
      #cadcff ${progressValue1 * 3.6}deg
  )`;
        if (progressValue1 === progressEndValue1) {
            clearInterval(progress1);
        }
    }, speed1);


    let progressBar2 = document.querySelector(".circular-progress2");
    let valueContainer2 = document.querySelector(".value-container2");

    let progressValue2 = 0;
    let progressEndValue2 = 90;
    let speed2 = 10;

    let progress2 = setInterval(() => {
        progressValue2++;
        valueContainer2.textContent = `${progressValue2}%`;
        progressBar2.style.background = `conic-gradient(
      #f9ce23 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
        if (progressValue2 === progressEndValue2) {
            clearInterval(progress2);
        }
    }, speed2);

    let progressBar3 = document.querySelector(".circular-progress3");
    let valueContainer3 = document.querySelector(".value-container3");

    let progressValue3 = 0;
    let progressEndValue3 = 30;
    let speed3 = 10;

    let progress3 = setInterval(() => {
        progressValue3++;
        valueContainer3.textContent = `${progressValue3}%`;
        progressBar3.style.background = `conic-gradient(
      hotpink ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
  )`;
        if (progressValue3 === progressEndValue3) {
            clearInterval(progress3);
        }
    }, speed3);
})


    const [number1, setNumber1]  = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [total, setTotal] = useState(number1 + number2 + number3)
    const [bilk, bilkTotal] = useState(number1 + number2 + number3)
    const [tuk, tukTotal] = useState(number1 + number2 + number3)
    const [sach, sachTotal] = useState(number1 + number2 + number3)

    function addThem(){
        setTotal( 66 + (14 * number2) + (5 * number1) - (7 * number3));
        bilkTotal( number2 * 1.64)
        tukTotal(number2 * 0.75)
        sachTotal(number2 * 3.2)
    }




  return (


    <div  className="App">


        <div className="graf1">
            <div id="Honza" className="circular-progress">
            <div id="Honza2" className="value-container">0%</div>
                <div className="text2">1500kcal</div>
            </div>

            <div className="text">Celkem kcal</div>
        </div>
        <div className="graf2">
            <div className="circular-progress1">
                <div className="value-container1">0%</div>
                <div className="text2">120g</div>
            </div>

            <div className="text">Bílkoviny</div>

        </div>
        <div className="graf3">
            <div className="circular-progress2">
                <div className="value-container2">0%</div>
                <div className="text2">48g</div>
            </div>

            <div className="text">Sacharidy</div>

        </div>
        <div className="graf4">
            <div className="circular-progress3">
                <div className="value-container3">0%</div>
                <div className="text2">6g</div>
            </div>

            <div className="text">Tuky</div>


        </div>
      <div className="hledani">

      </div>
      <div className="kcal">
          <p className="textkcal">{total}</p>
          <p className="textkcal1">průměr kcal</p>
          <img className="pic1" src={pc1}/>

      <div className="kcal1">

      </div>
      </div>
      <div className="bilk">
          <p className="textbilk">{bilk}</p>
          <p className="textkcal1">průměr bílkovin</p>
          <img className="pic2" src={pc2}/>
          <div className="bilk1">

          </div>
      </div>
      <div className="sach">
          <p className="textsach">{sach}</p>
          <p className="textkcal1">průměr sacharidů</p>
          <img className="pic3" src={pc3}/>
          <div className="sach1">  </div>

      </div>
      <div className="tuk">
          <p className="texttuky">{tuk}</p>
          <p className="textkcal1">průměr tuku</p>
          <img className="pic4" src={pc4}/>
          <div className="tuk1">

          </div>
      </div>

    <div className="nabidka">


      <div className="icons8-app">
        </div>
      <div className="kcalkalkul">Kcalkalkulačka</div>



          <button onClick={addThem} className="novejcil"> Novej cíl</button>


        <input className="input1" type="number" placeholder="0" value={number1} onChange={e => setNumber1(+e.target.value)} /><p className="p1">výška/cm</p>
        <input className="input2" type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)}/><p className="p2">váha/kg </p>
        <input className="input3" type="number" placeholder="0" value={number3} onChange={e => setNumber3(+e.target.value)}/><p className="p3">věk/roky</p>
    </div>








    </div>
  );

}
export default App;
