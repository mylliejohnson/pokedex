import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import View from './components/View';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import { DataProvider } from './components/DataContext';

function App(props) {

  let [page, setPage] = useState(true)

  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <div className='main'>
          <Pokemon />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/:name" render={(props) => <View {...props} />} />
          </Switch>
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
