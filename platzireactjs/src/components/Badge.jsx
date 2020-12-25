import React from 'react';
import confLogo from '../images/FortiClient.PNG';
import confBatman from '../images/batman.png';
import confTwitter from '../images/twitter.png'
import confCountry from '../images/Peru.png'
import '../components/styles/Badge.scss';
class Badge extends React.Component{
    render(){
        return(
            <div className="BadgeContainer">
                <div className="BadgeHeader">
                    <div className="HeaderLogo">
                        <img src={confLogo} alt="Logo de conferencia"/>
                    </div> 
                </div>
                <div className="BadgeAvatar">
                    <div className="AvatarImg">
                        <img src={confBatman} alt="Avatar"/>
                    </div>
                    <div className="AvatarName">
                        <p>Marco Antonio <br/> Juárez Miranda</p>
                    </div>
                </div>
                <div className="BadgeInfo">
                    <div className="BadgeMail">
                        <p>Desarrollador Front End</p>
                    </div>
                    <div className="BadgeTwitter">
                        <div className="BadgeIconTwitter">
                            <img src={confTwitter} alt="Twitter"/>
                        </div>
                        <div className="BadgeMail">
                            <p>@mjuarezm</p>
                        </div>
                        <div className="BadgeIconCountry">
                            <img src={confCountry} alt="País"/>
                        </div>
                    </div>
                </div>
                <div className="BadgeFooter">
                    #platzicom
                </div>
            </div>
        );        
    }
}

export default Badge;
