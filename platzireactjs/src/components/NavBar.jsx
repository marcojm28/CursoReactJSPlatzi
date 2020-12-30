import React from 'react';
import PlatziLogo from '../images/PlatziLogo.png';
import '../pages/styles/BadgeNew.scss';
class NavBar extends React.Component {
    render(){
        return(
            <div className="ContainerNavBar navbar navbar-dark bg-dark">
                
                    <div className="ContainerLogoNavBar">
                        <div className="ContainerLogoNavBarImg">
                            <a href="/">
                                <img src={PlatziLogo} alt="PlatziLogo"></img>
                            </a>
                        </div>
                        <div className="ContainerLogoNavBarText">
                            <a href="/">
                            <span className="font-weight-light">Platzi</span>
                            <span className="font-weight-bold">Conf</span>
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default NavBar;