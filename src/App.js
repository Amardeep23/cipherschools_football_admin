import { Topbar } from "./Components/Topbar/Topbar";
import { Sidebar } from "./Components/sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/Userlist/UserList";
import { User } from './pages/User/User';
import { Newuser } from './pages/NewUser/Newuser';
import  ProductList  from "./pages/ProductList/ProductList";
import { Product } from './pages/Product/Product';
import { NewProduct } from './pages/NewProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<Newuser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
