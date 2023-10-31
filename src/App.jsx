import { useState } from 'react'
import './App.css'
import Card from './components/Cards/Card'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [cartData, setCartData] = useState([])
  const handleSelectBtn = (id) => {
    // console.log("select btn clicked", id);
    // const newCart = [...cartData, id];
    let final = [];
    let isAvailable = cartData.find(data => data.title === id.title);
    if (!isAvailable) {
      const newCart = [...cartData, id];

      setCartData(newCart)

    }
    else {
      alert("Tis Course is already addeded");
    }
  }
  return (
    <>
      <Header></Header>
      <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='lg:col-span-3 md:col-span-2'>
          <Card handleSelectBtn={handleSelectBtn}></Card>
        </div>
        <div className='relative'>
          <Cart cartData={cartData}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
