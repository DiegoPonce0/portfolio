import { Analytics } from '@vercel/analytics/react';

import { Home } from './pages/Home.tsx';
import {Layout} from './components/Layout.tsx'

function App() {

  
  return (
    <>
      <Layout>
          <Home />
      </Layout>

      <Analytics />
    </>
  )
}

export default App
