import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState={
    vechileInfo:[
        {id: 1 , model_name:'AUDI' , vehchile_type: 'SUV', mileage:"5km/lt", top_speed:'250km/hr', cost:'30lakh', sales_units: 4},
        {id: 2 , model_name:'BMW' , vehchile_type: 'Hatchback', mileage:"7km/lt",top_speed:'320km/hr', cost:'40lakh', sales_units: 2},
        {id: 3 , model_name:'Mercidez' , vehchile_type: 'SUV', mileage:"6km/lt", top_speed:'220km/hr', cost:'25lakh', sales_units: 6}
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
function deleteVechile(id){
    dispatch({
        type: 'DELETE_VECHILE',
        id:id
    })
}

function addVechile(vechile){
    dispatch({
        type: 'ADD_VECHILE',
        payLoad: vechile
    })
}

function sortSales(vechile){
    dispatch({
        type: 'SORT_SALES',
        payLoad: vechile
    })

}

    return (
    <GlobalContext.Provider value={{vechileInfo: state.vechileInfo,deleteVechile,addVechile,sortSales}}>
        {children}
    </GlobalContext.Provider>
    )
}

