import React from 'react';
import {adidasArr, AdidasItem} from './Adidas'
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";
import {pumaArr, PumaItem} from "./Puma";

type CrossModelsType = {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {model, id} = useParams();
    console.log(model, id)

    const currentModel = crossModels[`${model}`].find(el => el.id === Number(id))

    // const currentModel = model
    //     ? crossModels[model].find(el => el.id === Number(id))
    //     : null


    return (
        currentModel ?
            <div style={{textAlign: 'center'}}>
                <h2>{currentModel.model}</h2>
                <h3>{currentModel.collection}</h3>
                <h4>{currentModel.price}</h4>

                <img
                    src={currentModel.picture}
                    alt={currentModel.model}
                    style={{width: '600px', height: 'auto', marginRight: '10px'}}
                />
            </div>
            : <Error404/>
    )
};
