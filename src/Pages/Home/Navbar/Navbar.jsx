import logo from "../../../assets/images/more/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar1 flex items-center  justify-center">
        <img className="logo" src={logo} />
        <h2 className="text">Espresso Emporium</h2>
      </nav>
    </div>
  );
};

export default Navbar;
