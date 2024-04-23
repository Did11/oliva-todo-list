import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/about">Acerca de</Link></li>
      <li><Link to="/todos">To do List</Link></li>
    </ul>
  </nav>
);

export default Navigation;
