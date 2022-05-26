import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAReview from './Pages/Dashboard/AddAReview/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Home from './Pages/HomePage/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import AddItem from './Pages/Items/AddItem/AddItem';
import AllItems from './Pages/Items/AllItems/AllItems';
import ViewSingleItem from './Pages/Items/AllItems/ViewSingleItem/ViewSingleItem';
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import SingleItem from './Pages/Items/ManageItems/SingleItem/SingleItem';
import Purchase from './Pages/Items/Purchase/Purchase';
import Login from './Pages/Users/Login/Login';
import Register from './Pages/Users/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all-items' element={<AllItems />} />
        <Route path='/all-items:id' element={<ViewSingleItem />} />
        <Route path='/manage-items' element={<ManageItems />} />
        <Route path='/manage-items:id' element={<SingleItem />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='my-orders' element={<MyOrders />} />
          <Route path='add-review' element={<AddAReview />} />
          <Route path='manage-orders' element={<ManageAllOrders />} />
        </Route>
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
