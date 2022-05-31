import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddAReview from './Pages/Dashboard/AddAReview/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
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
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Users/RequireAuth/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './Pages/Dashboard/MyProfile/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all-items' element={<AllItems />} />
        <Route path='/all-items:id' element={<ViewSingleItem />} />
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='update-profile' element={<UpdateProfile />} />
          <Route path='my-orders' element={<MyOrders />} />
          <Route path='add-review' element={<AddAReview />} />
          <Route path='manage-orders' element={<ManageAllOrders />} />
          <Route path='manage-items' element={<ManageItems />} />
          <Route path='manage-items:id' element={<SingleItem />} />
        </Route>
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
