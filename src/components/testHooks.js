import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function TestHooks(props) {
    const [isClicked,setIsClicked] =  useState(false);
    function onBtnClick() {
        props.onClick();
        setIsClicked(true);
    }
    const allState = useSelector(state=>state);
    const dispatch = useDispatch();
    console.log(allState,"state");
    
    return (
        <div>
        <button onClick = {isClicked ? undefined : onBtnClick}
        disabled = {isClicked}
        > You can click me only once!
        </button>
        <button onClick={()=>dispatch({
            type:"Car",
            payload:"maruti"
        })}>
            Car!!!!!!!!!
        </button>
        <h1>{allState}</h1>
        <button onClick={()=>dispatch({
            type:"Bike",
            payload:"honda"
        })}>
            Bike
        </button>
        
        </div> 
        
    );
}

export default TestHooks;

