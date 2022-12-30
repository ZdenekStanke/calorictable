import React, {useEffect, useState} from "react";
import './App.css';
import {Modal} from "./Modal";







function App() {


    const [showModal, setShowModal ] = useState(false)



    const openModal = () => {
        setShowModal(prev => !prev)
    }



    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = 100;
    let speed = 60;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
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
    let speed1 = 60;

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
    let speed2 = 60;

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
    let speed3 = 60;

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
  return (


    <div className="App">

        <div className="graf1">
            <div className="circular-progress">
            <div className="value-container">0%</div>
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

      <div className="kcal1">
          <img src="cheeseburger.png"/>
      </div>
      </div>
      <div className="bilk">
          <div className="bilk1">
          </div>
      </div>
      <div className="sach">
          <div className="sach1">  </div>
      </div>
      <div className="tuk">
          <div className="tuk1">  </div>
      </div>

    <div className="nabidka">


      <div className="icons8-app">
        </div>
      <div className="kcalkalkul">Kcalkalkulačka</div>



          <button onClick={openModal} className="novejcil"> Novej cíl</button>
        <Modal showModal={showModal} setShowModal={setShowModal} />

      <div className="domov">
        <p><strong>výška/cm</strong>:{}</p>
      </div>
      <div className="mojejidlo">
          <p><strong>váha/kg</strong>:{}</p>
      </div>
      <div className="cviky">
          <p><strong>věk/roky</strong>:{}</p>
      </div>
    </div>








    </div>
  );

}
export default App;
