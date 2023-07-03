import Logo from '../../assets/web_ evolutio_logo.png'
import './navbar.style.css'

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Web Evolution" />
      <h3>Web Evolution</h3>
    </div>
  );
}

export default Navbar