import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
import * as gameService from "./Services/gameService";

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login'
import { Register } from './components/register/Register';
import { Create } from './components/users/create-page/Create';
import { Edit } from './components/users/edit-page/Edit';
import { Details } from './components/details/Details';
import { Catalog } from './components/catalog/Catalog';

import './App.css';

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      });
  }, [])

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path="catalog/:gameId" element={<Details />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
