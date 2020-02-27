import React from 'react';
import { Numpad } from './components/molecules/numpad';

function App() {
  return (
    <div className="App w-3/5 mx-32 my-32">
      <div id="root" className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        <Numpad />
      </div>
    </div>
  );
}


export default App;
