import React, {useState}  from "react";
import './App.css';
import {Modal} from "./Modal";


function App() {
    const [showModal, setShowModal] = useState(false)



    const openModal = () => {
        setShowModal(prev => !prev)
    }
  return (

    <div className="App">

        <div className="graf1"> <h2>0</h2> </div>
        <div className="graf2"> </div>
        <div className="graf3"> </div>
        <div className="graf4"> </div>
      <div className="hledani">

      </div>
      <div className="kcal">

      <div className="kcal1">
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
        <p><strong>Domov</strong>: {}</p>
      </div>
      <div className="mojejidlo">
        Moje jídlo
      </div>
      <div className="cviky">
        Cviky
      </div>
    </div>








    </div>
  );
}

export default App;
