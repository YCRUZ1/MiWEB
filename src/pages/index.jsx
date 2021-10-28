import CardRazasPerros from 'components/CardRazasPerros';
import Bolsos from 'media/Bolsos.jpg';
import Carteras from 'media/Carteras.jpg';
import Mochilas from 'media/Mochilas.jpg';
import Maletas from 'media/Maletas.jpg';
import Bolsosp from 'pages/Bolsosp';
import Carterasp from 'pages/Carterasp';
import Mochilasp from 'pages/Mochilasp';
import Maletasp from 'pages/Maletasp';

function Index() {
  return (
    <section>
      <h1>Bolsos Bongo</h1>
      <ul className='breedCardContainer'>
        <CardRazasPerros nombreRaza='Carteras' imagen={Carteras} page={Carterasp}  />
        <CardRazasPerros nombreRaza='Bolsos' imagen={Bolsos} page={Bolsosp}/> 
        <CardRazasPerros nombreRaza='Mochilas' imagen={Mochilas} page={Mochilasp}/>
        <CardRazasPerros nombreRaza='Maletas' imagen={Maletas} page={Maletasp}/>
  
      </ul>
    </section>
  );
}

export default Index;
