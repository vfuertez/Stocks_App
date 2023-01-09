import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Stocks from './pages/IndividualStock'
import App from './App'
import Apple from './stockroutes.js/Apple'
import Microsoft from './stockroutes.js/Microsoft'
import Facebook from './stockroutes.js/Facebook'
import Alphabet from './stockroutes.js/Alphabet'
import Oracle from './stockroutes.js/Oracle'
import Intel from './stockroutes.js/Intel'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="stocks" element={<Dashboard />} />
      <Route path="stocks/:symbol" element={<Stocks />} />
      <Route path="stocks/AAPL" element={<Apple />} />
      <Route path="stocks/MSFT" element={<Microsoft />} />
      <Route path="stocks/GOOGL" element={<Alphabet />} />
      <Route path="stocks/FB" element={<Facebook />} />
      <Route path="stocks/ORCL" element={<Oracle />} />
      <Route path="stocks/INTL" element={<Intel />} />
    </Route>
  )
)

export default router
