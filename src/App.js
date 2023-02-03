
import './App.css';
import Table from './component/Table/Table';
import Products from './component/Products/Product';
import Reduce from './component/UseReduce/Reduce';
import {BrowserRouter,Route,Routes,HashRouter,useNavigate} from "react-router-dom";
import Demo from './component/Demo/Demo';
import Tableinput from './component/Create simple input table/Tableinput';


function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path='/table' element={<Table/>}/>
          <Route path='/' element={<Router_dome/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/demo' element={<Demo/>}/>
          <Route path='/reduce' element={<Reduce/>}/>
          <Route path='/simpletable' element={<Tableinput/>}/>
        </Routes>
      
      </HashRouter>
  
    </div>
  );
}

export default App;


function Router_dome(){

  const nevigate=useNavigate()
  let startroute=(url)=>{
    nevigate(url)
  }
return(
<div>
<div className="main-container">
  <button className='button-to-route' onClick={()=>startroute("/simpletable")}>Simple Input table</button>
  <button className='button-to-route' onClick={()=>startroute("/table")}>Table I/O delet/Update</button>
  <button className='button-to-route' onClick={()=>startroute("/Products")}>Products</button>
  <button className='button-to-route' onClick={()=>startroute("/demo")}>Show data in console 'instant'</button>
  <button className='button-to-route' onClick={()=>startroute("/reduce")}>UseReduce</button>
</div>
</div>
);
}