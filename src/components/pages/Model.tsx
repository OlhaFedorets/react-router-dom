import React from 'react';
import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";


export const Model = () => {
    const params = useParams();
    console.log(params)
    const id: number = adidasArr.findIndex(adidas => adidas.id === Number(params.id))
    // const id = adidasArr.find(adidas=>adidas.id === Number(params.id)) // с помощью find
    return (
        id !== -1 ?
            <div style={{textAlign: 'center'}}>
                <h2>{adidasArr[id].model}</h2>
                <h3>{adidasArr[id].collection}</h3>
                <h4>{adidasArr[id].price}</h4>

                <img
                    src={adidasArr[id].picture}
                    alt={adidasArr[id].model}
                    style={{width: '600px', height: 'auto', marginRight: '10px'}}
                />
            </div>
            : <Error404/>
    )
};
