import React from 'react';
import Gravatar from './Gravatar';
import confLogo from '../images/FortiClient.PNG';
import confTwitter from '../images/twitter.png';
import confCountry from '../images/Peru.png';
import '../components/styles/Badge.scss';
function Badge(props){

    const dataGravatar = {
        email: props.email,
        className: '',
    };

        return(
            <div className="BadgeContainer border">
                <div className="BadgeHeader">
                    <div className="HeaderLogo">
                        <img src={confLogo} alt="Logo de conferencia"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <Gravatar email={props.email} className={props.className}></Gravatar>
                    </div>
                    <div className="col">
                        <h1 className="lg">{props.firstName} <br/> {props.lastName}</h1>
                    </div>
                </div>
                <div className="BadgeInfo">
                    <div className="BadgeMail">
                        <p>{props.title}</p>
                    </div>
                    <div className="BadgeTwitter">
                        <div className="BadgeIconTwitter">
                            <img src={confTwitter} alt="Twitter"/>
                        </div>
                        <div className="BadgeMail">
                            <p>{props.email}</p>
                        </div>
                        <div className="BadgeIconCountry">
                            <img src={confCountry} alt="País"/>
                        </div>
                    </div>
                </div>
                <div className="BadgeFooter">
                    <div className="BadgeFooterText">
                        <h2 className="TextFooter">{props.twitter}</h2>
                    </div>
                </div>
            </div>
        );        
    
}

export default Badge;
