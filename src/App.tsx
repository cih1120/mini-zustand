import "./App.css";
import createStore from "./store/createStore";
function App() {
  const store = createStore({ count: 0 });
  const { setState, getState } = store;

  const add = () => {
    setState({ count: getState().count + 1 });
    console.log(getState());
  };

  return (
    <div>
      {getState().count}
      <button onClick={add}>++</button>
    </div>
  );
}

export default App;
