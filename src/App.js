import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import View from './components/View';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='main'>
        <Pokemon />
        <Switch>
          <Route path="/poke/:name" render={(props) => <View {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
