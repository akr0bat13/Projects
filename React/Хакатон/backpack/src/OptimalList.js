import React from 'react';

function OptimalList({ items, optimalItems }) {
  const filteredItems = items.filter(item => optimalItems.includes(item.id))
  let total = 0
  filteredItems.map((item) => {
    
    total = Number(item.price) + total
    console.log(total)

  })
  return (
    <section className='grocery-form'>
      <h3>Items in Backpack:</h3>
      <h4>Total cost: {total}$</h4>
      {filteredItems.map((item) => (
        <article className='grocery-item' >
            <p className="title">name:{item.name}</p>
            <p className="title">price:{item.price}$</p>
            <p className="title">weight:{item.weight}</p>

      </article>
        ))}
    </section>
  );
}


export default OptimalList;