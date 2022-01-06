import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstName: '',lastname:''});
    return (
        <div>
       <form >
           <input 
                type="text"
                value={name.firstName}
                onChange = {e => setName({...name, firstName:e.target.value})} 
            />
           <input 
                type="text"
                value={name.lastname}
                onChange = {e => setName({...name, lastname:e.target.value})} 
            />
            <h2>first name is - {name.firstName}</h2>
            <h2>last name is - {name.lastname}</h2>
        </form>     
        </div>
    )
}

export default HookCounterThree
