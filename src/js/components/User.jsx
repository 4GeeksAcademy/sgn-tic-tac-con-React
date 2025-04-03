import React, { useEffect, useState } from "react";
import Tablero from "./Tablero";

const User = () => {

    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");
    const [tablero, setTablero] = useState(false);
    
    let data =[ "", "", "", "", "", "", "", "", ""];

    const TicTacToe =() => {}
    const toggle = (w,num) =>{
        
    }

    const [turno, setTurno ] = useState ("");
    // const handleChange = (event) => {
    //     setNombre(event.target.value); // Actualiza el estado con el valor del input
    //   };

    



    useEffect(() => {
        if (playerX !== "" && playerO !=="") {
            setTablero(true)
        }

    }, [turno])
    return (
        <div className="container-md" >
            <h1 className="tittle" >Pick a weapon</h1>
            {
                !tablero ? (






                    

                    <div className="userContainer">

                        <h2 className="h2">  Choose your <strong> Weapon  </strong> </h2>
                        <div className="row">
                        <div className="col d-flex flex-column align-items-center">
                                {/* /* <input type="text" className="user" placeholder="" value={nombre}  onChange={handleChange} /> */}
                                <input onChange={(e) => setPlayerX (e.target.value) } type="text" className="user" placeholder="" aria-label="" aria-describedby="basic-addon1" />

                                <button className="button"
                                    onClick={() => setTurno ("X")
                            
                                    }


                                >
                                    <i className="fa-solid fa-xmark fa-7x"></i>
                                </button>

                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <input   onChange={(e) =>setPlayerO (e.target.value) }   type="text" className="user" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                <button
                                    className="button" onClick={() => setTurno("O")}

                                >
                                    <i className="fa-solid fa-o fa-7x"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                ) : (
                    <Tablero />
                )
            }

        </div>


    );

};



export default User;



//  {/* { show == true ?  (
//                 <h1>Prueba</h1>
//             ) : ( <h1>NUEVO TEXTO</h1>) } */}


