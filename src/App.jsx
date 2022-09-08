import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Footer } from './componets/public/Footer';
import Main from './componets/public/Main';
import { Navbar } from './componets/public/Navbar';
import { Detail } from './componets/public/Detail';
import { UserForm } from './componets/public/UserForm';

function App() {
  return (
    <div>
      <Navbar />

      {/*------------------------*/}

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/details/:id" element={<Detail />} />
        <Route exact path="/user-form" element={<UserForm />} />
      </Routes>

      {/*------------------------*/}

      <Footer />

    </div>

  );
}

export default App;
