import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <header>
        <Navbar name="Rhys Carroll" description="Developer" />
      </header>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App