import React, { useState } from "react";
import './Counter.css';

function Counter(){
    let plus = document.querySelector('.plus')

    const [count, setCount] = useState(0)

    function onClick(){
        plus = document.addEventListener('click', ()=>{
            useState += 1;
        })
    }
    onClick()
    console.log(count)



    

    return(
        <div class='Counter'>
            <div>
            <h2>Счетчик:</h2>
            <h1>0</h1>
            <button class='minus'>-Минус</button>
            <button class='plus'>Плюс+  </button>
        </div>
        </div>
    )
}

export default Counter;