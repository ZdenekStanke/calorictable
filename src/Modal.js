import React, {useState} from 'react';
import styled from 'styled-components';
import './Model.css';





export {

}





export const Modal = ({showModal, setShowModal}) => {


  const [number1, setNumber1]  = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

    return <>{showModal ?( <div className="Background">
        <div className="wraper">
            <div className="kalkulacka">
            <input type="number" placeholder="0" value={number1} onChange={e => setNumber1(+e.target.value)} /><p className="vyska">výška/cm</p>
            <input type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)}/><p className="vaha">váha/kg </p>
                <input type="number" placeholder="0" value={number3} onChange={e => setNumber3(+e.target.value)}/><p className="roky">věk/roky</p>

            </div>

                <button   onClick={() => setShowModal(prev => !prev)} className="zpet">  zpět </button>


        </div>
    </div>) : null}</>;
};