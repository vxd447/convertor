import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Footer/>   
            </div>
        )
    }
}

export default Layout;