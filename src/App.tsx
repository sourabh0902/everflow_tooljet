import Body from './components/Body'
import Navbar from './components/navbar'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <>
      <img src="/gradient.svg" alt="" className='absolute' />
      <Navbar />
      <Body />
      <Carousel />
    </>
  )
}

export default App