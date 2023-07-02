import Logo from '../../assets/web_ evolutio_logo.png'
import './navbar.style.css'

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Web Evolution" />
      <h3>Web Evolution</h3>
      <div className="right-container">
        <p>emepuchades -github</p>
        <p>FEMHACK</p>
      </div>
    </div>
  );
}

export default Navbar