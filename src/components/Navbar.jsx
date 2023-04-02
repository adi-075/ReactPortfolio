import * as Scroll from 'react-scroll';

const Navbar = () => {
  return (
    <div className="text-white font-sans font-bold bg-gradient-to-b from-gray-800 to-gray-900 rounded fixed w-32 h-full">
      <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-center" style={{ "marginTop": "170%" }}><a href="#home">Atharv Patwardhan</a></h1>
      <div className="text-center" style={{ "marginTop": "40%" }}>
        <ul>
          <li style={{ "marginBottom": "20%", "height": "40px" }} className="nav-item" class="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-110">
            <Scroll.Link to='about' spy={true} smooth={true} offset={50} duration={600}>About</Scroll.Link>
          </li>
          <li style={{ "marginBottom": "20%", "height": "40px" }} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-110">
            <Scroll.Link to='skills' spy={true} smooth={true} offset={50} duration={600}>Skills</Scroll.Link>
          </li>
          <li style={{ "marginBottom": "20%", "height": "40px" }} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-110">
            <Scroll.Link to='projects' spy={true} smooth={true} offset={50} duration={600}>Projects</Scroll.Link>
          </li>
          <li style={{ "marginBottom": "20%", "height": "40px" }} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-110">
            <Scroll.Link to='contact' spy={true} smooth={true} offset={50} duration={600}>Contact</Scroll.Link>
          </li>
          <li style={{ "marginBottom": "20%", "height": "40px" }} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-110">
            <Scroll.Link to='\' spy={true} smooth={true} offset={50} duration={600}>Resume</Scroll.Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
