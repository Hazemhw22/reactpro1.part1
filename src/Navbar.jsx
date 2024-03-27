import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li className='signup'><Link to='/signin'>Signin</Link></li>
        <li className='signup'><Link to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
