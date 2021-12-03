import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Test from './components/Test';
import { rerenderEntireTree } from './render';
import events from './components/Items/events.json';



function App(props) {

  let newData = {
    name: '',
    date: "14.09.2019",
    city: "Amsterdam",
    image: "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png",
    newPostText: "lol"
  };
  let addD = (data) => {
    newData.name = data;
    props.events.push(newData);
    rerenderEntireTree(events);
  }

  
  //newPostText = "lol";


  let updateNewPostText = (newText) => {
    newData.newPostText = newText;
    rerenderEntireTree(events, newData.newPostText);
    // debugger;
    console.log(newData.newPostText);
  }
  return (
    <div className="App">
      <div className="content">
        <Header  />
        <main>
          <Test addD={addD} loadPost={newData.newPostText} newPostText={props.newPostText} updateNewPostText={updateNewPostText}/>
          <Items events={props.events} />
        </main>
      </div>
    </div>
  );
}

export default App;