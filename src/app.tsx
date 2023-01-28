import ReactDOM from "react-dom/client";
import Realm from 'realm';
import getDB from './db';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


function render() {
  const onButtonClick = () => {
    const db = getDB();
    console.log(db);
  };
  root.render(
    <>
      <h2>Hello from React!</h2>
      <button onClick={onButtonClick}>Click ME!</button>
    </>
  );
}

render();
