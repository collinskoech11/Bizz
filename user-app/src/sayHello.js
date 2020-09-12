import React from 'react';

function Hello(){
    const sayHello = () =>{
        console.log("Hello");
    };
    return(
        <div>
            <button onClick={sayHello}>Hello</button>
        </div>
    );
}
export default Hello;