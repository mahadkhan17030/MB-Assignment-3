import React from 'react';
import { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<any>(0);
  let [text, setText] = useState<any>("Add Task");
  let [list, setList] = useState<any>([]);

  const del = (i: any) => {
    list.splice(i, 1);
    setList([...list]);
  };
  const edit = (i:any, x:any)=>{
    let a = prompt("Enter edited task", x);
    list[i] = a;
    setList([...list]);

  }

  return (
    <>
      <div>
        {}

        <div>
          <p>{text}</p>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className=""
            onClick={() => {
              list.push(text);
              setList([...list]);
            }}
          >
            Add Task
          </button>

          {list.map((x: any, i: any) => (
            <>
              <p key={i}>{x}</p>
              <button
                type="button"
                onClick={() => {
                  del(i);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  edit(i, x);
                }}
              >
                Change
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;