import { useState } from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import Pokemons from './components/Pokemons';
import Aside from './components/Aside';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='bg-[#F6F8FC]'>
        <main className='outfit max-w-[1000px] overflow-y-auto mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen ' >
          <Pokemons/>
          <Aside/>
        </main>
      </section>
    </>
  )
}

export default App
