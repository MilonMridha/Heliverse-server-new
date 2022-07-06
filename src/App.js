
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Pages/Register';
import GetUser from './Components/Pages/GetUser';
import SingleUser from './Components/Pages/SingleUser';
  
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/user' element={<GetUser></GetUser>}></Route>
        <Route path='/user/:id' element={<SingleUser></SingleUser>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;