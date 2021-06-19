import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Add=()=> {
    const {addVechile} = useContext(GlobalContext)
    const [form,setForm] = useState({model_name:'',vehchile_type:'',mileage:'',top_speed:'',cost:'',sales_units:''}) 
    
    const handleChange=(e)=>{
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.id]:e.target.value   
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        addVechile(form)
         console.log(form)
     }
    return (
        <div>
            <form className="row g-3 " id="form" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="model_name" className="form-label">Model Name</label>
                        <input type="text" className="form-control" id="model_name" required onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="vehchile_type" className="form-label">Vechile Type</label>
                        <input type="text" className="form-control" id="vehchile_type" required onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="mileage" className="form-label">Mileage</label>
                        <input type="text" className="form-control" id="mileage" required onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="top_speed" className="form-label">Top Speed</label>
                        <input type="text" className="form-control" id="top_speed" required onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cost" className="form-label">Cost</label>
                        <input type="text" className="form-control" id="cost" required onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sales_units" className="form-label">Sales unit in FY20-21</label>
                        <input type="text" className="form-control" id="sales_units" required onChange={handleChange}/>
                    </div>   
                    <button type="submit" className="btn btn-info justify-content-center">SUBMIT</button>
                </form>
        </div>
    )
}

export default Add
