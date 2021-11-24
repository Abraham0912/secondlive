import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <h1>App.js</h1>
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
