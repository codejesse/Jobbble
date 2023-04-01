import { useEffect, useState } from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Splash from './components/Splash';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }, [])

  return isLoading ? (
    <Splash />
  ) : (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
