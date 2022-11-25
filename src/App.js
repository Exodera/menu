import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {
  const [menuItems, setMenuItems] = useState(items);
  const allCategories = ["All",...new Set(items.map((item)=>item.category))];

  const filterItems = (category) =>{
    if(category==='All'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems);
  }

  return(
  <main>
    <div className='menu container'>
      <h3 className='title'>Our Menu</h3>
      <div className='underline'></div>
      <Categories filterItems={filterItems} categories={allCategories}/>
      <Menu items={menuItems}/>


    </div>

  </main>
  )
}

export default App;
