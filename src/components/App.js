import React from 'react';

import './stylesheets/style.css';
import Headers from './hi/Headers';
import Footers from './hi/Footers';
import Heros from './hi/Heros';
import Articless from './hi/Articless';
import Featuress from './hi/Featuress';
import Abouts from './hi/Abouts';
import Brandss from './hi/Brandss';
import Servicess from './hi/Servicess';
import Valuess from './hi/Valuess';
import Pricings from './hi/Pricings';
import Contacts from './hi/Contacts';

export default function App() {
  return (
    <>
      <Headers />
      <main>
        <Heros />
        <Featuress />
        <Abouts />
        <Brandss />
        <Servicess />
        <Valuess />
        <Pricings />
        <Contacts />
        <Articless />
      </main>
      <Footers />
    </>
  );
}
