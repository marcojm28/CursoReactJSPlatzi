import React from 'react';
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import HeroLogo from '../images/hero.PNG'
import '../pages/styles/BadgeNew.scss';
import PlatziLogo from '../images/PlatziLogo.png';
class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <NavBar></NavBar>
                <div className="row">
                    <div className="col">
                        <div className="BadgeNewHero">
                            <img className="img-fluid" src={PlatziLogo} alt="logo"></img>
                        </div>
                    </div>
                </div>
                <div className="ContainerBadgeNew container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Daniel Enrique" lastName="Sanchez Mangulo" jobTitle="Desarrollador back end"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;