import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BottomNavigation from './Components/BottomNavigation'
import Header from './Components/Header'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {

  const routes = createBrowserRouter([
    {
      element:<Home/>,
      path:'/'
    },
    {
      element:<Products/>,
      path:'/products'
    },

  ])

  return (
    <div className='bg-slate-50  min-h-screen relative'>
      {/* <Header/> */}
      {/* <Products/> */}
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
