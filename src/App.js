import './App.css';
import Header from './components/Header/Header';
import Item from './components/Items/Item/Item';
import Items from './components/Items/Items';
import events from './components/Items/events.json';
import { useState, useEffect } from 'react';




function App(props) {
  const [dateS, setDateS] = useState("09");
  const [cityS, setCityS] = useState("Amsterdam");
  let eventF = events.filter(e => (e.date).substr(3, 2) == dateS);//фильтр даты
  eventF = eventF.filter(e => e.city == cityS);// фильтр города

  let event = eventF.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);

  let sel = (e) => {
    setDateS(e.target.value);
    eventF = events.filter(e => (e.date).substr(3, 2) == dateS);
  }


  let selC = (e) => {
    setCityS(e.target.value);
    eventF = events.filter(e => e.city == cityS);
  }


  useEffect(() => {
    document.title = `City: ${cityS}. Month: ${dateS}`;
  });

  return (
    <div className="App">
      <div className="content">
        <Header sel={sel} selC={selC} />
        <main>
          <Items events={event} />
        </main>
      </div>
    </div>
  );
}

export default App;