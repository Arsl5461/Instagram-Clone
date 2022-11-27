
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import PostDetails from './components/PostDetails';
function App() {
  return (
  <div className='container'>
    <Routes>
<Route path="/" exact={true} element={<Home/>}></Route>
<Route path="/:id" exact={true} element={<PostDetails/>}></Route>

  </Routes>
  </div>
  );
}

export default App;
