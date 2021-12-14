import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../img/ChildrenLogo.png';
import {getHijosByName, getvacunasByMail} from "../../controller/miApp.controller";




const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const mostrarTodo= async function()
    {
        let getVacunas = await getvacunasByMail()
        let getRegistro = await getHijosByName()
    }

      

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/home">
                        <img src={logo} width="150" height="307"/>
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/aboutus`}> Quienes Somos </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/contacto`}> Contacto </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/controles"> Controles <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={mostrarTodo} activeClassName='is-active'  to={`/calendarioVacunacionLog`}> Calendario de Vacunación </NavLink> </li>
                            <li><NavLink onClick={mostrarTodo} activeClassName='is-active' to={`/calculoPercentilesLog`}> Cálculo de Percentiles </NavLink> </li>
                            <li><NavLink onClick={mostrarTodo} activeClassName='is-active' to={`/visitas-pediatricasLog`}> Visitas Pediátricas </NavLink> </li>
                        </ul>
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/controles"> Perfil <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/agregarNiño`}> Agregar Niño</NavLink> </li>
                            <li><NavLink onClick={mostrarTodo} activeClassName='is-active' to={`/modificar-niño`}> Modificar Niño</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/modificar-perfil`}> Modificar Perfil </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/`}> Cerrar Sesion </NavLink> </li>
                        </ul>
                        </li>         
                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu