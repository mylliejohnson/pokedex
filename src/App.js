import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import View from './components/View';
import Pokemon from './components/Pokemon';
import { SearchProvider } from './components/SearchContext';

function App(props) {

  return (
    <div className="App">
      <SearchProvider>
        <Navbar />

        <div className='main'>
          <Pokemon />
          <Switch>
            <Route path="/poke/:name" render={(props) => <View {...props} />} />
          </Switch>
        </div>
      </SearchProvider>
    </div>
  );
}

export default App;
