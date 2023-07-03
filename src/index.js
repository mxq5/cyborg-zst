import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Landing from "./Landing";
import Poster from "./Poster";
import Kontakt from "./Kontakt";
import Regulamin from "./Regulamin";
import Wyniki from "./Wyniki";
import Zasady from "./Zasady";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout /> } >
              <Route path="/" element={ <Landing /> } />
              <Route path="/regulamin" element={ <Regulamin /> } />
              <Route path="/zasady-oceniania" element={ <Zasady /> } />
              <Route path="/plakat" element={ <Poster /> } />
              <Route path="/wyniki" element={ <Wyniki /> } />
              <Route path="/kontakt" element={ <Kontakt /> } />
            </Route>            
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

