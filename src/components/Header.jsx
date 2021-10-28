import logo from 'media/logo.png';

const Header = () => {
  return (
    <header>
      <ul className='navbar'>
        <li>
          <img src={logo} alt='imagen' className='logo' />
        </li>
        <li>
          <button className='botonGenerico mainButton'>Nuevos</button>
        </li>
        <li>
          <button className='botonGenerico mainButton'>Rebajas</button>
        </li>
        <li>
          <div className='buscar'>
            <input placeholder='¿Qué estas buscando?' />
            <i className='fas fa-search botonGenerico iconoBusqueda'></i>
          </div>
        </li>
        <li>
          <button className='botonGenerico secondaryButton'>Login</button>
        </li>
        <div className='buscar'>
            <input placeholder='¿Qué estas buscando?' />
            <i className='fas fa-search botonGenerico iconoBusqueda'></i>
          </div>
      </ul>
    </header>
  );
};

export default Header;

// const variableNumerica = 3;
// const variableTexto = 'esto es un texto';
// const variableArray = [1, 2, 3, 4, 5, 5];
// const variableObjeto = {
//   llave1: 'valor1',
//   llave2: 'valor2',
//   llave3: 'valor3',
// };
// const listaObjetos = [
//   {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
//   },
//   {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
//   },
//   {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
//   },
// ];

// const nombreFuncion = (in1, in2, in3) => {
//   return 'retorno de la funcion';
// };

// function nombreFuncion(in1, in2, in3) {
//   return 'retorno de la funcion';
// }
