export default  (state,action) =>{
    switch (action.type) {
        case "DELETE_VECHILE":
        let newVechileInfo= state.vechileInfo.filter(vechile=>{
            return action.id!==vechile.id
        })
        return{
            ...state,
            vechileInfo : newVechileInfo
        }

        case "ADD_VECHILE":
            action.payLoad.id=Math.random();
            let vechileInfoAdd=[...state.vechileInfo, action.payLoad]
            console.log(action,vechileInfoAdd)
        return{
            ...state,
            vechileInfo: vechileInfoAdd
        }

        case "SORT_SALES":
            return{
                ...state,
                vechileInfo : state.vechileInfo.length>0 ?[...state.vechileInfo.sort((a,b)=>a.sales_units-b.sales_units)]:state.vechileInfo
            }
        

        default:
            return state;
    }
}