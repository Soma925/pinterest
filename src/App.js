import{Route,Routes}from "react-router-dom";
import './App.css';
import Body from './components/Body';
import Finalboards from './components/Finalboard';
function App() {
  return (
    <>
  

    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/mainpage" element={<Finalboards/>}/>
    </Routes>


    </>
  );
}
export default App;
