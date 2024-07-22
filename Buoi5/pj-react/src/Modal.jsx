import './Modal.css'
import { useState } from 'react'
import Task from './Task'

export default function modal({open})
{
    const [state, setState] = useState(false);
    return (
        <div className='modal' style={{display: open ? "block" : "none"}}>
            <p>task</p>
            <Task open={state}></Task>
            <button onClick={()=>{
                setState(!state);
            }}>Click here to close</button>
        </div> 
    )
}