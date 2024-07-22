import { useState } from 'react'
import './Task.css'

export default function task({open})
{
    return (
        <div className='task' style={{display: open ? "block" : "none"}}>
            <p>des</p>
        </div> 
    )
}