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
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import SingleItem from './Pages/Items/ManageItems/SingleItem/SingleItem';
import Purchase from './Pages/Items/Purchase/Purchase';
import Login from './Pages/Users/Login/Login';
import Register from './Pages/Users/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Users/RequireAuth/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './Pages/Dashboard/MyProfile/UpdateProfile/UpdateProfile';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Pages/Users/RequireAdmin/RequireAdmin';
import Payment from './Pages/Items/Purchase/Payment/Payment';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all-items' element={<AllItems />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/purchase/payment/:id' element={
          <RequireAuth>
            <Payment />
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
          <Route path='manage-orders' element={
            <RequireAdmin>
              <ManageAllOrders />
            </RequireAdmin>
          } />
          <Route path='manage-items' element={
            <RequireAdmin>
              <ManageItems />
            </RequireAdmin>
          } />
          <Route path='manage-items/:id' element={
            <RequireAdmin>
              <SingleItem />
            </RequireAdmin>
          } />
          <Route path='all-users' element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          } />
          <Route path='add-item' element={
            <RequireAdmin>
              <AddItem />
            </RequireAdmin>
          } />
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
