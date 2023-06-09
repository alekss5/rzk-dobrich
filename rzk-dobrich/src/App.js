import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from './Pages/homepage';
const router = createBrowserRouter([
  {
    path: '/rzk-dobrich',
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
