import Body from './components/Body'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

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