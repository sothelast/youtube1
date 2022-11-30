
import './App.css';
import Table from './component/Table';
import Products from './component/Products/Product'
import {BrowserRouter,Route,Routes,HashRouter,useNavigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/table' element={<Table/>}/>
          <Route path='/' element={<Router_dome/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
      
      </BrowserRouter>
  
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
  <button className='button-to-route' onClick={()=>startroute("/table")}>Table I/O delet/Update</button>
  <button className='button-to-route' onClick={()=>startroute("/Products")}>Products</button>
</div>
</div>
);
}