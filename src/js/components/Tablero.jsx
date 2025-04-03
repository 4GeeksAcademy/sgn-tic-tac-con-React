import React, { useEffect, useState } from "react";

const Tablero = () => {





    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [winer, setWiner] = useState();

    console.log(data);

    const toggle = (e, num) => {
        if (data[num] !== "") {
            return;
        }

        let newData = [...data];

        if (count % 2 === 0) {

            newData[num] = "X";
        } else {

            newData[num] = "O";
        }



        setData(newData);
        setCount(prev => prev + 1);

    };




    const checkWin = () => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // horizontales
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // verticales
            [0, 4, 8],
            [2, 4, 6], // diagonales
        ];

        for (let [a, b, c] of lines) {

            if (data[a] !== "" && data[a] === data[b] && data[b] === data[c]) {
                setWiner(data[a])
                return;
            }
        }
        return null;
    };

    useEffect(() => {
        checkWin();
    }, [data]);

    useEffect(() => {
        if (typeof winer === "string" && winer !== "") {
            alert(`ganó ${winer}`)
        }
    }, [winer])


    const handleReset = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setWiner(undefined);


    };

    const handIcon = (i) => {
        return data[i] == "X" ? <i class="fa-solid fa-xmark fa-7x"></i> : data[i] == "O" ? <i class="fa-solid fa-o fa-7x"></i> : null


    };

    const status = () => {
        if (winer) {
            return `Ganó ${winer}`;
        } else {
            return `Turno de ${count % 2 === 0 ? "X" : "O"}`;
        }
    };

    
    



    return (
        <div className="tablero">
            <div className="status">
                <h1>{status ()}</h1>
            </div>
            <div className="row">
                <div className="boxes" onClick={(e) => toggle(e, 0)}>
                    {handIcon(0)}
                </div>
                <div className="boxes" onClick={(e) => toggle(e, 1)}>
                    {handIcon(1)}
                </div>
                <div className="boxes" onClick={(e) => toggle(e, 2)}>
                    {handIcon(2)}
                </div>
            </div>
            <div className="row">
                <div className="boxes" onClick={(e) => toggle(e, 3)}>
                    {handIcon(3)}
                </div>
                <div className="boxes" onClick={(e) => toggle(e, 4)}>
                    {handIcon(4)}
                </div>
                <div className="boxes" onClick={(e) => toggle(e, 5)}>
                    {handIcon(5)}
                </div>
            </div>
            <div className="row">
                <div className="boxes" onClick={(e) => toggle(e, 6)}>{handIcon(6)}</div>
                <div className="boxes" onClick={(e) => toggle(e, 7)}>{handIcon(7)}</div>
                <div className="boxes" onClick={(e) => toggle(e, 8)}>{handIcon(8)}</div>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );

}; export default Tablero;
