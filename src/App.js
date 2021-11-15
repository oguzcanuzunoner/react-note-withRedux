import './App.css';
import Header from './Components/Header';
import NoteLists from './Components/NoteLists';
import TextArea from './Components/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <TextArea />
      <NoteLists />
    </div>
  );
}

export default App;
