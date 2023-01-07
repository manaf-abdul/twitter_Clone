import React from 'react';
import Timeline from './components/TimeLine/Timeline';
import './App.css'
import LeftPane from './components/LeftPane/LeftPane';
import RightPane from './components/RightPane/RightPane';

function App() {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-sm-1 col-md-3 ' id="leftPane">
          <LeftPane />
        </div>
        <div className='col-sm-3  col-md-5' id="timeline">
          <Timeline />
        </div>
        <div className='col-sm-1 col-md-3' id="rightPane">
          <RightPane />
        </div>
      </div>
    </div>
  );
}

export default App;
