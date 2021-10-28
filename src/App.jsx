import Layout from 'layouts/Layout';
import Index from 'pages';
import BolsosInfo from 'pages/Bolsosp';
import CarterasInfo from 'pages/Carterasp';
import MochilasInfo from 'pages/Mochilasp';
import MaletasInfo from 'pages/Maletasp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/Carteras'>
              <CarterasInfo />
            </Route>
            <Route path='/Bolsos'>
              <BolsosInfo />
            </Route>
            <Route path='/Mochilas'>
              <MochilasInfo />
            </Route>
            <Route path='/Maletas'>
              <MaletasInfo />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
