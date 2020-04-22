import React, { Component } from 'react'
import '../style.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    <span>&copy; 2020, Docs Convertor</span>
                    <span className="footer-icons">
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="double" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="7" url="https://facebook.com"/>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="double" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="7"  url="https://twitter.com"/>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="double" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="7" url="https://linkedin.com"/>
                    </span>
                </div>
                
            </footer>
        );
    }
}

export default Footer;
