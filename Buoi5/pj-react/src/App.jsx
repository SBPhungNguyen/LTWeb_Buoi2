import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'
import task from './Task'


function App() {
  const [count, setCount] = useState(4)

  const [task, setTask] = useState('');
  const [des, setDes]=useState('');

  const [modal, setModal] = useState(false);

  const tasks=[];

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <input type='text' id="input_task" placeholder='Task' value={task} onChange={(event) => setTask(event.target.value)}></input>
      <input type='text' id="input_des" placeholder='Description' value={des} onChange={(event) => setDes(event.target.value)}></input>
      {/* <Modal open={modal}/> */}
      <button id='btn_add' onClick={() => {
  // console.log("Input 1 Value:", task);
  // console.log("Input 2 Value:", des);
  // setModal(!modal, task, des);
  for (let check of tasks)
  {
    if (check.t == task)
      return;
  }
  const a_p = document.createElement("p");
  const a_b = document.createElement("button");
  a_p.textContent=task;
  a_p.id = "a_p_"+task;
  a_b.textContent="See More";
  a_b.id=task;

  a_b.addEventListener("click", function(event){
    for (let str of tasks)
    {
      if (str.t == a_b.id)
      {
          const alr_p = document.getElementById("new_p_"+a_b.id);
          if (alr_p)
          {
            document.getElementById("a_p_"+a_b.id).removeChild(alr_p);
            a_b.textContent="See More";
          }
          else
          {
            const new_p = document.createElement("p");
            new_p.textContent = str.d;
            new_p.id = "new_p_"+a_b.id;
            document.getElementById("a_p_"+a_b.id).appendChild(new_p);
            a_b.textContent = "Less";
          }
      }
    }
  })

  document.getElementById("aaa").appendChild(a_p);
  document.getElementById("aaa").appendChild(a_b);
  
  const taskk = {
    t: task,
    d: des,
  }
  tasks.push(taskk);

  }}>Button</button>
  <div id='aaa'>

  </div>
    </>
  )
}

export default App
