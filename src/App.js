import Header from './Components/header';
import './App.css';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar'


function App() {
  return (
    <div className="App">
        <Header className="header"/>
            <br/>   <br/>   <br/> <br/>  <br/>  <br/> 
            <div className='row'>
               <div className='col-11 page'>
               <Body/>
               </div>
               <div className='col-1 sidebar'>
               <Sidebar/>
               </div>

            </div>
    
       
         
    </div>
  );
}

export default App;
