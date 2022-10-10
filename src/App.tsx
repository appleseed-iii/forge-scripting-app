import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { NFTQueries } from '../types/react-query-hooks';
import { getDefaultProvider } from 'ethers';
import { createClient, useAccount, WagmiConfig } from 'wagmi';
import Profile from './components/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Mint from './components/Mint';
function App() {
  const queryClient = new QueryClient()
  const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })
  const [count, setCount] = useState(0)

  return (
    <WagmiConfig client={client}>
      <QueryClientProvider client={queryClient}>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Profile />
        <Mint />
      </div>
      </QueryClientProvider>
    </WagmiConfig>
  )
}

export default App
