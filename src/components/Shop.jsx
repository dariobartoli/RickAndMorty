import React from 'react'
import { useState, useEffect } from "react";

export const Shop = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    const sumar = ()=>{
        setCount(count+1);
    }

    const restar = ()=>{
        setCount(count-1);
    }

    const add = ()=>{
        setShow(!show);
    }
    const closeModal = ()=>{
        setShow(!show);
    }

    



    let array = ["item 1", "item 2", "item 3", "item 4", "item 5"]
    let items = [
        {
            name: "item 1",
            description: "asd",
            stock: 6
        },
        {
            name: "item 2",
            description: "asd",
            stock: 10
        },
        {
            name: "item 3",
            description: "asd",
            stock: 9
        },
        {
            name: "item 4",
            description: "asd",
            stock: 8
        },
        {
            name: "item 5",
            description: "asd",
            stock: 4
        }
    ]
  return (
    <div>
        {items.map((item, id) => <div key={id}>
            <p>{item.name}</p>
            <p>{item.stock}</p>
            <button onClick={add}>Add to Cart</button>
        </div>)}



        <div className={`modal ${show ? '' : 'modalShow'}`}>
            <div className='modalContainer'>
                <h5>modal</h5>
                <p>soy un modal</p>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    </div>
  )
}
