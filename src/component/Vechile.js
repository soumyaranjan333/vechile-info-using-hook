import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Vechile(props) {
    const context = useContext(GlobalContext)
    console.log(props)
    // console.log(context)
    let id= props.match.params.id;
    const vechile = context.vechileInfo.find(vechile=>{
        return id==vechile.id
    })

    // let id= match.match.params.id;
    // console.log(id)
    return (
        vechile ? (
            <div>
                <h4>Model Name: {vechile.model_name}</h4>
                <h4>Vechile Type: {vechile.vehchile_type}</h4>
                <h4>Mileage: {vechile.mileage}</h4>
                <h4>Top Speed: {vechile.top_speed}</h4>
                <h4>Cost: {vechile.cost}</h4>
                <h4>Sales in unit for FY20-21: {vechile.sales_units}</h4>
            </div>
        )
        :(
            <div>Loading Data....</div>
        )
        
    )
    
}

export default Vechile
