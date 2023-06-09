import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from './Pages/homepage';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Homepage/>
  },
  
])

function App() {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
