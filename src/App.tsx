import './App.css';
import Window from './components/window/window';

function App() {
  return (
    <div className="App">
      <Window title='My Window'>
        <p style={{ height: '400px' , width: '100%'}}>
          This is the body of my window
        </p>
      </Window>
    </div>
  );
}

export default App;
