import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import SAELOGO from '../../assets/images/saeLogo.png'
import '../../assets/css/header.css'


// const propTypes = {
//   navPosition: PropTypes.string,
//   hideNav: PropTypes.bool,
//   hideSignin: PropTypes.bool,
//   bottomOuterDivider: PropTypes.bool,
//   bottomDivider: PropTypes.bool
// }

// const defaultProps = {
//   navPosition: '',
//   hideNav: false,
//   hideSignin: false,
//   bottomOuterDivider: false,
//   bottomDivider: false
// }

// const Header = ({
//   className,
//   navPosition,
//   hideNav,
//   hideSignin,
//   bottomOuterDivider,
//   bottomDivider,
//   ...props
// }) => {

//   const [isActive, setIsactive] = useState(false);

//   const nav = useRef(null);
//   const hamburger = useRef(null);

//   useEffect(() => {
//     isActive && openMenu();
//     document.addEventListener('keydown', keyPress);
//     document.addEventListener('click', clickOutside);
//     return () => {
//       document.removeEventListener('keydown', keyPress);
//       document.removeEventListener('click', clickOutside);
//       closeMenu();
//     };
//   });  

//   const openMenu = () => {
//     document.body.classList.add('off-nav-is-active');
//     nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
//     setIsactive(true);
//   }

//   const closeMenu = () => {
//     document.body.classList.remove('off-nav-is-active');
//     nav.current && (nav.current.style.maxHeight = null);
//     setIsactive(false);
//   }

//   const keyPress = (e) => {
//     isActive && e.keyCode === 27 && closeMenu();
//   }

//   const clickOutside = (e) => {
//     if (!nav.current) return
//     if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
//     closeMenu();
//   }  

//   const classes = classNames(
//     'site-header',
//     bottomOuterDivider && 'has-bottom-divider',
//     className
//   );

//   return (
//     <header
//       {...props}
//       className={classes}
//     >
//       <div className="container">
//         <div className={
//           classNames(
//             'site-header-inner',
//             bottomDivider && 'has-bottom-divider'
//           )}>
//           <Logo />
//           {!hideNav &&
//             <>
//               <button
//                 ref={hamburger}
//                 className="header-nav-toggle"
//                 onClick={isActive ? closeMenu : openMenu}
//               >
//                 <span className="screen-reader">Menu</span>
//                 <span className="hamburger">
//                   <span className="hamburger-inner"></span>
//                 </span>
//               </button>
              
//               <nav
//                 ref={nav}
//                 className={
//                   classNames(
//                     'header-nav',
//                     isActive && 'is-active'
//                   )}>
//                 <div className="header-nav-inner">

//                   <ul className={
//                     classNames(
//                       'list-reset text-xs',
//                       navPosition && `header-nav-${navPosition}`
//                     )}>
//                     <li>
//                       <Link to="/" onClick={closeMenu}>Home</Link>
//                     </li>
//                   </ul>

//                   <ul className={
//                     classNames(
//                       'list-reset text-xs',
//                       navPosition && `header-nav-${navPosition}`
//                     )}>
//                     <li>
//                       <Link to="/events" onClick={closeMenu}>Events</Link>
//                     </li>
//                   </ul>

//                   <ul className={
//                     classNames(
//                       'list-reset text-xs',
//                       navPosition && `header-nav-${navPosition}`
//                     )}>
//                     <li>
//                       <Link to="/team" onClick={closeMenu}>Team</Link>
//                     </li>
//                   </ul>

//                   <ul className={
//                     classNames(
//                       'list-reset text-xs',
//                       navPosition && `header-nav-${navPosition}`
//                     )}>
//                     <li>
//                       <Link to="/ted" onClick={closeMenu}><b>TEDx</b></Link>
//                     </li>
//                   </ul>

//                 <ul className={
//                   classNames(
//                     'list-reset text-xs',
//                     navPosition && `header-nav-${navPosition}`
//                   )}>
//                   <li>
//                     <Link to="/arhn" onClick={closeMenu}><b>Arhn</b></Link>
//                   </li>
//                 </ul>

//                 </div>
//               </nav>
              
//             </>}
//         </div>
//       </div>
//     </header>
//   );
// }

// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;

// export default Header;



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setCurrentPage(pathName);
  }, []);

  return (
    <div className="tedNavbar">
        <span className="nav-logo"><img src={SAELOGO} id="header-logo"></img></span>
      <div className={`nav-items ${isOpen && "open"}`}
      
      
      >
      <a href='/' className={currentPage === "/" ? "active" : ""}>Home</a>
      <a href='events' className={currentPage === "/events" ? "active" : ""}>Events</a>
        <a href="/team">Teams</a>
        <a href="/ted">TEDx</a>
        <a href="/arhn">Arhn</a>
    
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;