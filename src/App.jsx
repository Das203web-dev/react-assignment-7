import './App.css'
import Card from './components/Cards/Card'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='lg:col-span-3 md:col-span-2'>
          <Card></Card>
        </div>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
