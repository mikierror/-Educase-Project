
import { RouterProvider } from 'react-router-dom'
import appRouter from './Routing/appRouter'

function App() {
  return (
   <div className="min-h-screen bg-white flex justify-center items-center">
   <RouterProvider router={appRouter}>

   
   </RouterProvider>
   </div>
  )
}

export default App
