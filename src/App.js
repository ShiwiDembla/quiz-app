
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// imports
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css'

const router = createBrowserRouter([
  //array of objects
  {
  path: '/',
  element: <Main></Main>
}, 
{
  path: '/quiz',
  element: <Quiz></Quiz>
}, 
{
  path: '/result',
  element: <Result></Result>
}, 

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
