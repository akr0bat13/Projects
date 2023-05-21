import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import OptimalList from './OptimalList'
import { knapsack } from './Baclpack_algoritm'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [price, setPrice] = useState('')
  const [backpack, setBackpack] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, message: '', type: ''})
  const [optimalItems, setOptimalItems] = useState([])

  const backpackSubmit = (event) => {
    event.preventDefault()
    if (!backpack) {
      showAlert(true, 'danger', 'Error, enter a backpack value')
    } else {
      setBackpack(Number(backpack))
      showAlert(true, 'success', 'Backpack`s size changed')
      setOptimalItems(knapsack(Number(backpack), list))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !weight || !price || !backpack) {
      //error func
      showAlert(true, 'danger', 'Error, enter a message')
    }
    else if (name && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if (item.id == editID) {
          return {...item, name, price, weight}
        }
        return item
      }))
      setName('')
      setWeight('')
      setPrice('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Value changed')
      setOptimalItems(knapsack(Number(backpack), list))
      console.log(optimalItems)
    }
    else {
      showAlert(true, 'success', 'Got it!')
      const newItem = {id:new Date().getTime().toString(), name, price, weight}
      setList([...list, newItem])
      setName('')
      setWeight('')
      setPrice('')
      setOptimalItems(knapsack(Number(backpack), [...list, newItem]))
    }
  }

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({show, type, message})
  }

  const clearList = () => {
    showAlert(true, 'danger', 'List is clear')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
    setOptimalItems(knapsack(Number(backpack), list.filter((item) => item.id !== id)))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.name)
    setPrice(specificItem.price)
    setWeight(specificItem.weight)
  }

  useEffect( () => {
    localStorage.setItem('list', JSON.stringify(list))
    // setOptimalItems(knapsack(Number(backpack), list))
  },[list, backpack])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={backpackSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3>Backpack`s size</h3>
      <div className="underline"></div>
      <input className='grocery' placeholder='Backpack`s size' 
                    type="number"
                    value={backpack}
                    onChange={(event) => setBackpack(event.target.value)} />
      </form>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>Items list</h3>
        <div className="underline"></div>
        <div className="form-control">
          <div className="form_input">
            <input className='grocery' placeholder='Fill name' 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            <input className='grocery' placeholder='Fill weight' 
                    type="number"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)} />
            <input className='grocery' placeholder='Fill price' 
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)} />
          </div>
        </div>
          <button className="submit-btn" type='submit'>
            {isEditing ? 'edit': 'submit'} 
          </button>
      </form>
      
      {list.length > 0 && (<div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="underline underline-space"></div>
          
          <OptimalList items={list} optimalItems={optimalItems}/>
        <button className='clear-btn' onClick={clearList}>clear list</button>

      </div>)}
    </section>
  )
}

export default App
