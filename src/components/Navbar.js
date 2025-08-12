import React ,{useState,useRef,useEffect} from 'react'
import {navbarItems} from '../data/items'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
import logo from '../logo.svg';
import classes from '../styles/Navbar.module.scss'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      console.log(linksHeight)
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
        console.log(linksHeight)
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);

    const [mobileMode, setMobileMode] = useState(false);
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", handleResize);
      console.log(size);
      const [width, height] = size;
      console.log(width);
      if (width <= 1024) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [size]);

    return (
      <nav className={classes.navbar}>
        
        <div className={classes.nav_center}>
      
          <div className={classes.nav_header}>
              <div className={classes.logo}>
                <img src={logo}  alt='logo' />
                <span>Aladdin Dridi</span>
              </div>
              
            
              {!mobileMode && <ul className={classes.links}>
                {navbarItems.map((link,index) => {
                  return (
                    <li key={index}>
                      <a href={"#"+link.id}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>}
          
            {mobileMode && <button className={classes.nav_toggle} onClick={toggleLinks}>
              {showLinks ? <FaTimes />:<GiHamburgerMenu />}
            </button>}
          </div>
          <div className={classes.links_container} ref={linksContainerRef}>
            <ul className={classes.links} ref={linksRef}>
              {navbarItems.map((link,index) => {
                return (
                  <li key={index}>
                    <a href={"#"+link.id}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
 
        </div>
      </nav>
    )
}

export default Navbar