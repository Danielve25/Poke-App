import { useState } from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import Pokemons from './components/Pokemons';
import Aside from './components/Aside';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='bg-[#f8f8f8] overflow-y-auto h-screen'>
        <main className='outfit max-w-[1400px] o mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]  ' >
          <Pokemons/>
          <Aside/>
        </main>
      </section>
    </>
  )
}

export default App
