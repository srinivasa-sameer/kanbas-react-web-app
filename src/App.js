import './App.css';
import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas/index.js';

const App = () => {
  return (
    <div className="App">
      <HelloWorld />
      <Labs />
      <Kanbas />
    </div>
  );
};

export default App;
