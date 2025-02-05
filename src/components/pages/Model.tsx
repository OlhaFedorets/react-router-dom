import React from 'react';
import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";


export const Model = () => {
    const params = useParams();
    console.log(params)
    const id: number =  adidasArr.findIndex(adidas=>adidas.id === Number(params.id))
    return (
        <div style={{textAlign:'center'}}>
            <h2>{adidasArr[id].model}</h2>
            <h3>{adidasArr[id].collection}</h3>
            <h4>{adidasArr[id].price}</h4>

            <img
            src={adidasArr[id].picture}
            alt={adidasArr[id].model}
            style={{width: '600px', height: 'auto', marginRight: '10px'}}
            />
        </div>
    );
};
