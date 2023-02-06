import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {counterActions} from './store/index'

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    console.log('increment')
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    console.log('decrement')
    dispatch(counterActions.decrement())
  }

  const addBy = () => {
    console.log('addBy')
    dispatch(counterActions.addBy(10))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add value</button>

    </div>
  );
}

export default App;
