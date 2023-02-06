import './App.css';
import { Route, Routes,} from 'react-router-dom'

import HeaderComponent from './Components/HeaderComponent';
import GetDataList from './Components/GetDataList';
import GetInvalidData from './Components/GetInvalidData';
import GetDustParticleData from './Components/GetDustParticleData';
import GetInvalidDustParticle from './Components/GetInvalidDustParticle';

function App() {
  return (
    
   <div>
       <HeaderComponent />
         <div className="App">
           <Routes>     
                 <Route path = '/'  element = {<GetDataList/>}></Route>
                 <Route path = '/list'  element = {<GetDataList/>}></Route>
                 <Route path = '/invaliddata'  element = {<GetInvalidData/>}></Route>
                 <Route path = '/carbondioxide'  element = {<GetDustParticleData/>}></Route>
                 <Route path = '/invalidcarbondioxide'  element = {<GetInvalidDustParticle/>}></Route>
            </Routes>
         </div>
       
   </div> 
  );
}
export default App;
