import React, { useState } from "react";
function Company(){
    const[company,setCompany]=useState({id:"",cname:"",address:"",phono:"",email:""})
    const[companies,setCompanies]=useState([]);
    function handleChange(event){
         const value=event.target.value;
         console.log(value);
         setCompany({
            ...company,
            [event.target.id]:value

         })

    }
    function saveData(event){
        event.preventDefault();
        const name=event.target.value;
        console.log(name)
        let com={
            id:company.id,
            cname:company.cname,
            address:company.address,
            phono:company.phono,
            email:company.email
        }
        companies.push(com)
        setCompanies(companies);

        reset();
    }
    function reset(){
        setCompany.id(""),
        setCompany.cname(""),
        setCompany.address(""),
        setCompany.phono(""),
        setCompany.email("")


    }
    return (
        <div>
            <form>
                <label>id: </label>
                <input type="number" name="id" value={company.id} onChange={handleChange}/>
                <br></br>
                <br></br>
                <label>name: </label>
                <input type="text" name="cname" value={company.cname} onChange={handleChange}/>
                <br></br>
                <br></br>
                <label>Address: </label>
                <input type="text" name="address" value={company.address} onChange={handleChange}/>
                <br></br>
                <br></br>
                <label>phone Number: </label>
                <input type="number" name="phono" value={company.phono} onChange={handleChange}/>
                <br></br>
                <br></br>
                <label>Email Id</label>
                <input type="mail" name="email" value={company.email} onChange={handleChange}/>
                <br></br>
                <br></br>
                <button onClick={saveData}>save</button>
            </form>

        </div>

    )
}
export default Company