import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="list">
      <ul>
        <li><Link to='/'>BIO</Link></li>
        <li><Link to='/'>WORK</Link></li>
        <li><Link to='/'>PROGRESS</Link></li>
        <li><Link to='/'>CONTACT</Link></li>
      </ul>
    </div>
  )
}

export default Header;