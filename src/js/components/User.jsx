import React, { useEffect, useState } from "react";
import Tablero from "./Tablero";

const User = () => {

    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");
    const [tablero, setTablero] = useState(false);

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
            {
                !tablero ? (








                    <div class="userContainer">
                        <h1 className="tittle" > Choose your Weapon </h1>

                        <div class="row align-items-start">
                            <div class="col">
                                {/* /* <input type="text" className="user" placeholder="" value={nombre}  onChange={handleChange} /> */}
                                <input onChange={(e) => setPlayerX (e.target.value) } type="text" class="user" placeholder="" aria-label="" aria-describedby="basic-addon1" />

                                <button
                                    onClick={() => setTurno ("X")}

                                >
                                    X
                                </button>

                            </div>
                            <div class="col">
                                <input   onChange={(e) =>setPlayerO (e.target.value) }   type="text" class="user" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                <button
                                    onClick={() => setTurno("O")}

                                >
                                    O
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


