import './App.css';
import Header from './components/Header/Header';
import Item from './components/Items/Item/Item';
import Items from './components/Items/Items';
import events from './components/Items/events.json';
import { rerenderEntireTree } from './render';
import ReactDOM from 'react-dom';


  let dateS = "09";
  let eventF = events.filter(e => (e.date).substr(3, 2) == dateS);





  let event = eventF.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);
  let sel = (e) => {
    dateS = e.target.value;
    console.log(dateS);
    eventF = events.filter(e => (e.date).substr(3, 2) == dateS);
    event = eventF.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);
    ReactDOM.render(
      <div className="App">
        <div className="content">
          <Header sel={sel} selC={selC} />
          <main>
            <Items events={event} />
          </main>
        </div>
      </div>,
      document.getElementById('root')
    );
  }
  let cityS = "Amsterdam";
  eventF = events.filter(e => e.city == cityS);

  let selC = (e) => {
    cityS = e.target.value;
    console.log(cityS);
    eventF = events.filter(e => e.city == cityS);
    event = eventF.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);
    ReactDOM.render(
      <div className="App">
        <div className="content">
          <Header sel={sel} selC={selC} />
          <main>
            <Items events={event} />
          </main>
        </div>
      </div>,
      document.getElementById('root')
    );
  }
function App(props) {

  





  return (
    <div className="App">
      <div className="content">
        <Header sel={sel} selC={selC} />
        <main>
          <Items events={event}  />
        </main>
      </div>
    </div>
  );
}

export default App;