import Barratopo from './componentes/barratopo/Barratopo'
import Home from './componentes/paginas/home/Home'
import Hospital from './componentes/paginas/hospital/Hospital'
import Ubs from './componentes/paginas/ubs/Ubs'
import Policlinica from './componentes/paginas/policlinica/Policlinica'
import Ceo from './componentes/paginas/ceo/Ceo'
import Fisioterapia from './componentes/paginas/fisioterapia/Fisioterapia'
import Caps from './componentes/paginas/caps/Caps'
import Farmacia from './componentes/paginas/farmacia/Farmacia'
import Samu from './componentes/paginas/samu/Samu'
import Transporte from './componentes/paginas/transporte/Transporte'

import { BrowserRouter as Router, Route , } from "react-router-dom"


function App() {
  return (

    <Router>

      <Barratopo />
     

      <Router>
        <Route exact path='/'>
          <Home />
        </Route>

       

        <Route path='/hospital'>
          <Hospital />
        </Route>

        <Route path='/ubs'>
          <Ubs />
        </Route>

        <Route path='/policlinica'>
          <Policlinica />
        </Route>
        
          <Route path='/ceo'>
            <Ceo />
          </Route>
        
          <Route path='/fisioterapia'>
            <Fisioterapia />
          </Route>

          <Route path='/caps'>
            <Caps />
          </Route>

          <Route path='/farmacia'>
            <Farmacia />
          </Route>

          <Route path='/samu'>
            <Samu />
          </Route>

          <Route path='/transporte'>
            <Transporte />
          </Route>

      </Router>
    </Router>
  );
}

export default App;
