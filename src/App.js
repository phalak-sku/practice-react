import logo from './logo.svg';
import './App.css'
import TestHooks from './components/testHooks';
import { UserList } from './components/userList';
import { AddUser } from './features/addUser';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Shop } from './components/shoppingCart/Shop';


function sayHi() {
  alert('hi!');
}

function App() {
  return (

    <div className="App">
      <Router>
        <div>
            <Routes>
            <Route path ="/" element={<UserList/>}/>
            <Route path="/add-user/*" element={<AddUser/>} />
            <Route path="/edit-user" element={ <h1>Edit User</h1>} />
            <Route path="/shop" element={<Shop/>} />
            </Routes>
        </div>
      </Router>

      <link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    </div>
  );
}

export default App;
