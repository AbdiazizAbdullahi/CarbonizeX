import Stima from './zizu/Electricity';
import Fuel from './zizu/Fuel';
import Selector from './zizu/Selector';
import Shipping from './zizu/Shipping';

function App() {
  return (
    <div className="App">
      <Selector />
      <Stima/>
       <Fuel />
      <Shipping/>
    </div>
  );
}

export default App;