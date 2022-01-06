import React,{useState} from 'react'

function HookConterTwo() {
    const initial = 0;
    const [count,setCount] = useState(initial);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount+1 );
        }
    }

    return (

        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>    
            <button onClick={()=>setCount(prevCount => prevCount+1   )}>Decrement</button>  
            <button onClick={incrementFive}>Increment by five</button>  
        </div>
    )
}

export default HookConterTwo
