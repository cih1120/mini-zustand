import "./App.css";
import createStore, { useStore } from "./store/createStore";

const store = createStore({ count: 0 });

function App() {
  const state = useStore(store);

  const add = () => {
    store.setState({ count: state.count + 1 });
  };

  return (
    <div>
      {state.count}
      <button onClick={add}>++</button>
    </div>
  );
}

export default App;
