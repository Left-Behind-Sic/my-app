import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';


function App(props) {

  return (
    <div className="App">
      <div className="content">
        <Header  />
        <main>
          <Items events={props.events} />
        </main>
      </div>
    </div>
  );
}

export default App;