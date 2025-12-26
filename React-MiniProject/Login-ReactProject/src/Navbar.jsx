import Logo from './assets/Logo.png'
import { Link } from 'react-router-dom';

function Navbar({show}) {
  return(
    <div className={show ? 'Sidebar active' : 'Sidebar'}>
      <img src={Logo} alt="Logo" className='logo' />
      <ul className='Navbar-Ul'>
        <li className='Ul-Li'>
          <Link to="/">Home</Link>
        </li>
        <li className='Ul-Li'>
          <Link to="/About">About us</Link>
        </li>
        <li className='Ul-Li'>
          <Link to="/Contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar