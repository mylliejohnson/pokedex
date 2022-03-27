import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import View from './components/View';
import Pokemon from './components/Pokemon';
import { DataProvider } from './components/DataContext';
import { useState } from 'react'

function App(props) {

  let [screen, setScreen] = useState(false)

  return (
    <div className="App">
      <DataProvider>
        <Navbar />

        <div className='main'>
          <Pokemon />
          <Switch>
            <Route path="/poke/:name" render={(props) => <View {...props} />} />
          </Switch>
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
