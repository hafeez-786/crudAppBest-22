import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './features/user/AddUser';
import EditUser from './features/user/EditUser';
import UserList from './features/user/UserList';

function App() {
  return (
    <div className="container mt-3">
       <h2 className='text-center pb-4'>CRUD APP with REDUX ToolKit</h2>
       <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="/add-user" element={<AddUser />}/>
          <Route path="/edit-user/:id" element={<EditUser />}/>
       </Routes>     
    </div>
  );
}

export default App;
