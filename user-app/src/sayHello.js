import React from 'react';

function Hello(){
    const sayHello = () =>{
        console.log("Hello");
    };
    return(
        <div>
            <header>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </header>
        </div>
    );
}
export default Hello;