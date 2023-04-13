import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSideBar, setPageId } = useGlobalContext();
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <h3 className="logo">adipoli</h3>
        <button className="toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
      <Navlinks />
    </nav>
  );
};
export default Navbar;
