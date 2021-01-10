import React from 'react';
import { Link } from "react-router-dom";
import PlatziLogo from '../images/PlatziLogo.png';
import '../pages/styles/BadgeNew.scss';
class NavBar extends React.Component {
    render(){
        return(
            <div className="ContainerNavBar navbar navbar-dark bg-dark">
                
                    <div className="ContainerLogoNavBar">
                        <div className="ContainerLogoNavBarImg">
                            <Link to="/badges">
                                <img src={PlatziLogo} alt="PlatziLogo"></img>
                            </Link>
                        </div>
                        <div className="ContainerLogoNavBarText">
                            <Link to="/badges">
                            <span className="font-weight-light">Platzi</span>
                            <span className="font-weight-bold">Conf</span>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default NavBar;