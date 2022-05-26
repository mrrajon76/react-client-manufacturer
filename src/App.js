import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import AddParts from './Pages/Parts/AddParts/AddParts';
import ManageParts from './Pages/Parts/ManageParts/ManageParts';
import SingleParts from './Pages/Parts/ManageParts/SingleParts/SingleParts';
import Purchase from './Pages/Parts/Purchase/Purchase';
import Login from './Pages/Users/Login/Login';
import Register from './Pages/Users/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/manage-parts' element={<ManageParts />} />
        <Route path='/manage-parts:id' element={<SingleParts />} />
        <Route path='/add-parts' element={<AddParts />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
