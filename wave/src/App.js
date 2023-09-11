import './App.css';
import Waving from './Waving';


function App() {


  return (
    <div className='App'>
      <div className='Title'>
        <h1>Waving</h1>
      </div>
      <div className="Waving"
        style={{
          display: 'flex',
          height: '50vh',
          width: '100vw',
          position: 'fixed',
          bottom: 0, 
        }}>
        <Waving></Waving>
      </div>
    </div>
  );
}

export default App;
