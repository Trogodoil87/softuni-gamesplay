import { NavBar } from './components/Naviagtion';
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
      <NavBar />
      {/* Main Content */}
      <main id="main-content">
        <Home />
      </main>
    </div>

  );
}

export default App;
