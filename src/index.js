import React from "react";
import ReactDOM from "react-dom";

import Movie from "./Movie";
import Repertoire from "./Repertoire";
import './index.css';

var today = new Date(),
    date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear() + ".";

const App = function(){
    return (
        // <div>
        //    {/* Zadatak1 */}
        //    <label for="name">
        //        Enter name:
        //    </label>
        //    <input id="name" type="text"/>
        //    <button style={{backgroundColor:'blue', color:'white'}}>
        //        Click
        //    </button>
        // </div>

        // <div>
        //     {/* Zadatak2 */}
        //     <table style={{width:'100%', border:'5px ridge coral'}}>
        //         <tr>
        //             <th>Firstname</th>
        //             <th>Lastname</th>
        //             <th>Age</th>
        //         </tr>
        //         <tr style={{textAlign: 'center'}}>
        //             <td>Eve</td>
        //             <td>Jackson</td>
        //             <td>94</td>
        //         </tr>
        //         <tr style={{textAlign: 'center'}}>
        //             <td>John</td>
        //             <td>Doe</td>
        //             <td>80</td>
        //         </tr>
        //     </table>
        // </div>
        <div>
            <h1>Repertoar za danas ({date})</h1>

            <Repertoire>
                <Movie image="captain-america.jpg" name="Captain America - The first avenger"
                    sala="2" cena="350din"/>
            </Repertoire>

           <Repertoire>
                <Movie image="the-papillon.jpg" name="The papillon"
                        sala="1" cena="300din"/>
           </Repertoire>

           <Repertoire>
                <Movie image="city-of-z.jpg" name="The lost city of Z"
                        sala="5" cena="350din"/>
           </Repertoire>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)