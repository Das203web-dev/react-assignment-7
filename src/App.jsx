import { useState } from 'react'
import './App.css'
import Card from './components/Cards/Card'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [cartData, setCartData] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSelectBtn = (id) => {
    let totalCreditHour = parseFloat(creditHour) + parseFloat(id.credit_hours);
    let remaining = remainingHour - parseFloat(id.credit_hours);
    let price = totalPrice + parseInt(id.price)
    let isAvailable = cartData.find(data => data.id === id.id);
    if (!isAvailable) {
      const newCart = [...cartData, id];
      if (totalCreditHour > 20) {
        alert("Credit hour time exceeded");
      }
      else {
        setCreditHour(totalCreditHour);
        setRemainingHour(remaining);
        setCartData(newCart);
        setTotalPrice(price)

      }

    }
    else {
      alert("This Course is already added");
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
          <Cart cartData={cartData} creditHour={creditHour} remainingHour={remainingHour} totalPrice={totalPrice}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
