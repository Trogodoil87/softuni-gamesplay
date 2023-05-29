import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login'
import { Register } from './components/register/Register';
import { Create } from './components/users/create-page/Create';
import { Edit } from './components/users/edit-page/Edit';
import { Details } from './components/details/Details';
import { Catalog } from './components/catalog/Catalog';

import './App.css';

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
