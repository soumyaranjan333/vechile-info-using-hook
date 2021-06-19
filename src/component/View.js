import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Link} from 'react-router-dom'

const View=()=> {
    // const context = useContext(GlobalContext)
    // console.log(context)
    const {vechileInfo,deleteVechile,sortSales} = useContext(GlobalContext)
    const vechileList = vechileInfo.length ? (
        vechileInfo.map(vechile => {
            return(      
                <tbody key={vechile.id}>    
                    <tr> 
                        <td><Link to ={'/' + vechile.id} className='text-decoration-none'>{vechile.model_name}</Link> </td>  
                        <td>{vechile.vehchile_type}</td>
                        <td>{vechile.mileage}</td>
                        <td>{vechile.top_speed}</td>
                        <td>{vechile.cost}</td>
                        <td>{vechile.sales_units}</td>
                        <td onClick={()=>deleteVechile(vechile.id)}><a className='text-danger' href='#'>X</a></td>    
                        {/* <td onClick={()=>{this.handleClick(vechile.id)}} ><a className='text-danger' href='#'>X</a></td>     */}
                    </tr>
                </tbody>
                   
            )
        })
    ):(<div className="text-dark">No vechile to display. Please add a vechile</div>)

    return (
        <div className='container'>
            <table className="table table-dark table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Model Name</th>
                        <th scope="col">Vechile Type</th>
                        <th scope="col">Top Speed</th>
                        <th scope="col">Mileage</th>
                        <th scope="col">Cost</th>
                        <th  onClick={()=>sortSales(vechileInfo)}scope="col">Sales Units</th>
                        {/* <th onClick={this.handleClickSort} scope="col">Sales Units</th> */}
                        <th scope="col"></th>
                    </tr>
                </thead>
            {vechileList}
            </table>
        </div>
    )
}

export default View
