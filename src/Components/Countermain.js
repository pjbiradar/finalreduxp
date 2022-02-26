import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrease,Increase,setValue } from '../Actions/Counteraction';

const Countermain=()=> {
    const mystate=useSelector(state=>state.handlechange)
    const dispatch=useDispatch();

  return <div>
      <button onClick={()=>dispatch(Increase())}>increase</button>
      <button onClick={()=>dispatch(Decrease())}>Decrease</button>
      <button onClick={()=>dispatch(setValue(23))}>Set Value</button>
      <input type="text" value={mystate}/>

  </div>;
}
export default Countermain;