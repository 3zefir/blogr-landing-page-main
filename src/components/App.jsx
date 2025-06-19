import React, {useState} from 'react';
import './copy-style.css';
import menuOpen from '../images/icon-hamburger.svg';
import menuClose from '../images/icon-close.svg';
import arrowUp from '../images/icon-arrow-up.svg';
import arrowDown from '../images/icon-arrow-light.svg';
import designedDesktop from '../images/illustration-editor-desktop.svg';
import designedMobile from '../images/illustration-editor-mobile.svg';
import infrastructureImage from '../images/illustration-phones.svg';
import logo from '../images/logo.svg';
import laptopDesktop from '../images/illustration-laptop-desktop.svg';
import laptopMobile from '../images/illustration-laptop-mobile.svg';
import arrowUpRed from '../images/icon-arrow-up-dark.svg'
import arrowDownRed from '../images/icon-arrow-dark.svg'


const App = () => {
    return (
        <div>

            <div className="title--bg">
                <div className="title">
                    <Nav/>
                    <Header/>
                </div>
            </div>

            <Main/>
            <Footer/>

        </div>
    );
};

export default App;

function Nav() {
    const [menu, setMenu] = useState(false);
    const [height, setHeight] = useState(400)

    return (
        <nav className='nav'>

            {menu ? <div className="nav__menu" style={{height: height + 'px'}}>

                <ul className="nav__list--mobile" >

                    <li className="list__item--mobile">


                        <div className="product--mobile" onMouseMove={() => setHeight(400 + 100)} onMouseLeave={() => setHeight(height - 100)}>

                            <h3 className="product__title--mobile">Product <img src={arrowUpRed} alt="" className="product__title--up--mobile"/>
                                <img src={arrowDownRed} alt="" className="product__title--down--mobile"/></h3>
                            <ul className="product__list--mobile">
                                <li className="product__list-item--mobile">Overview</li>
                                <li className="product__list-item--mobile">Pricing</li>
                                <li className="product__list-item--mobile">Marketplace</li>
                                <li className="product__list-item--mobile">Features</li>
                                <li className="product__list-item--mobile">Integrations</li>
                            </ul>
                        </div>


                    </li>

                    <li className="list__item--mobile">


                        <div className="company--mobile" onMouseMove={() => setHeight(400 + 100)} onMouseLeave={() => setHeight(height - 100)}>
                            <h3 className="company__title--mobile" >Company <img src={arrowUpRed} alt="" className="company__title--up--mobile"/>
                                <img src={arrowDownRed} alt="" className="company__title--down--mobile"/></h3>
                            <ul className="company__list--mobile">
                                <li className="company__list-item--mobile">About</li>
                                <li className="company__list-item--mobile">Team</li>
                                <li className="company__list-item--mobile">Blog</li>
                                <li className="company__list-item--mobile">Careers</li>
                            </ul>
                        </div>


                    </li>

                    <li className="list__item--mobile">


                        <div className="connect--mobile" onMouseMove={() => setHeight(400 + 100)} onMouseLeave={() => setHeight(height - 100)}>
                            <h3 className="connect__title--mobile">Connect <img src={arrowUpRed} alt="" className="connect__title--up--mobile"/>
                                <img src={arrowDownRed} alt="" className="connect__title--down--mobile"/></h3>
                            <ul className="connect__list--mobile">
                                <li className="connect__list-item--mobile">Contact</li>
                                <li className="connect__list-item--mobile">Newsletter</li>
                                <li className="connect__list-item--mobile">LinkedIn</li>
                            </ul>
                        </div>


                    </li>
                </ul>

                <button className="nav__button--login--mobile">Login</button>
                <button className="nav__button--signup--mobile">Sign Up</button>
            </div> : null}







            <button className="nav__menu--open" style={menu ? {display: 'none'} : {display: 'inline-block'}} onClick={() => setMenu(true)}><img src={menuOpen} alt="" className="menu--open__image"/></button>
            <button className="nav__menu--close" style={menu ? {display: 'inline-block'} : {display: 'none'}} onClick={() => setMenu(false)}><img src={menuClose} alt="" className="menu--close__image"/></button>





            <img className="nav__title" src={logo}></img>

            <ul className="nav__list">


                <li className="list__item">
                    <div className="product">
                        <h3 className="product__title">Product <img src={arrowUp} alt="" className="product__title--up"/><img src={arrowDown} alt="" className="product__title--down"/></h3>
                        <ul className="product__list">
                            <li className="product__list-item">Overview</li>
                            <li className="product__list-item">Pricing</li>
                            <li className="product__list-item">Marketplace</li>
                            <li className="product__list-item">Features</li>
                            <li className="product__list-item">Integrations</li>
                        </ul>
                    </div>
                </li>


                <li className="list__item">
                    <div className="company">
                        <h3 className="company__title">Company <img src={arrowUp} alt=""
                                                                    className="company__title--up"/>
                            <img src={arrowDown} alt="" className="company__title--down"/></h3>
                        <ul className="company__list">
                            <li className="company__list-item">About</li>
                            <li className="company__list-item">Team</li>
                            <li className="company__list-item">Blog</li>
                            <li className="company__list-item">Careers</li>
                        </ul>
                    </div>
                </li>


                <li className="list__item">
                    <div className="connect">
                        <h3 className="connect__title">Connect <img src={arrowUp} alt=""
                                                                    className="connect__title--up"/>
                            <img src={arrowDown} alt="" className="connect__title--down"/></h3>
                        <ul className="connect__list">
                            <li className="connect__list-item">Contact</li>
                            <li className="connect__list-item">Newsletter</li>
                            <li className="connect__list-item">LinkedIn</li>
                        </ul>
                    </div>
                </li>


            </ul>

            <button className="nav__button--login">Login</button>
            <button className="nav__button--signup">Sign Up</button>


        </nav>
    )
}

function Header() {
    return (
        <header className='header'>

            <h1 className="header__title">A modern publishing platform</h1>
            <p className="header__info">Grow your audience and build your online brand</p>
            <button className="header__button--start header__button">Start for Free</button>
            <button className="header__button--learn header__button">Learn More</button>

        </header>
    )
}

function Main() {
    return (
        <main className='main'>

            <div className="designed">

                <h1 className="designed__title">Designed for the future</h1>
                <img src={designedDesktop} alt="" className="designed__image--desktop"/>
                <img src={designedMobile} alt="" className="designed__image--mobile"/>
                <div className="designed__introducing">
                    <h2 className="introducing__title">Introducing an extensible editor</h2>
                    <p className="introducing__info">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.</p>
                </div>
                <div className="designed__robust">
                    <h2 className="robust__title">Robust content management</h2>
                    <p className="robust__info">Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>

            </div>

            <div className="infrastructure--bg">
                <div className="infrastructure">

                    <img src={infrastructureImage} alt="" className="infrastructure__image"/>
                    <h1 className="infrastructure__title">State of the Art Infrastructure</h1>
                    <p className="infrastructure__info">With reliability and speed in mind, worldwide data centers
                        provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site
                        competitive.</p>

                </div>
            </div>

            <div className="laptop">

                <img src={laptopDesktop} alt="" className="laptop__image--desktop"/>
                <img src={laptopMobile} alt="" className="laptop__image--mobile"/>

                <div className="simple">

                    <h2 className="simple__title">Free, open, simple</h2>
                    <p className="simple__info">Blogr is a free and open source application backed by a large community
                        of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

                </div>

                <div className="tooling">

                    <h2 className="tooling__title">Powerful tooling</h2>
                    <p className="tooling__info">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.</p>

                </div>

            </div>

        </main>
    )
}


function Footer() {
    return (
        <footer className='footer'>

            <img src={logo} alt="" className="footer__title"/>

            <ul className="footer__list">

                <li className="footer__list-item">
                    <div className="footer__list-item__product">

                        <h3 className="product__title--footer">Product</h3>
                        <ul className="product__list--footer">
                            <li className="product__list-item--footer">Overview</li>
                            <li className="product__list-item--footer">Pricing</li>
                            <li className="product__list-item--footer">Marketplace</li>
                            <li className="product__list-item--footer">Features</li>
                            <li className="product__list-item--footer">Integrations</li>
                        </ul>

                    </div>
                </li>

                <li className="footer__list-item">
                    <div className="footer__list-item__company">

                        <h3 className="company__title--footer">Company</h3>
                        <ul className="company__list--footer">
                            <li className="company__list-item--footer">About</li>
                            <li className="company__list-item--footer">Team</li>
                            <li className="company__list-item--footer">Blog</li>
                            <li className="company__list-item--footer">Careers</li>
                        </ul>

                    </div>
                </li>

                <li className="footer__list-item">
                    <div className="footer__list-item__connect">

                        <h3 className="connect__title--footer">Connect</h3>
                        <ul className="connect__list--footer">
                            <li className="connect__list-item--footer">Contact</li>
                            <li className="connect__list-item--footer">Newsletter</li>
                            <li className="connect__list-item--footer">LinkedIn</li>
                        </ul>

                    </div>
                </li>

            </ul>

        </footer>
    )
}

