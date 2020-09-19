import React from 'react'
import fb from '../assets/images/facebook-square-brands.png'
import ig from '../assets/images/instagram-brands.png'
import yt from '../assets/images/youtube-brands.png'
import ln from '../assets/images/linkedin-in-brands.png'

export default function Footer() {
    const socialLinks = [
        {
            name: 'Facebook',
            img: fb,
            src: "#",
            alt: 'Image of a social media icon.'
        },
        {
            name: 'Instagram',
            img: ig,
            src: "#",
            alt: 'Image of a social media icon.'
        },
        {
            name: 'Youtube',
            img: yt,
            src: "#",
            alt: 'Image of a social media icon.'
        },
        {
            name: 'LinkedIn',
            img: ln,
            src: "#",
            alt: 'Image of a social media icon.'
        },
    ];
    const siteLinks = [
        {
            name: 'About Alden',
            url: '#'
        },
        {
            name: 'Search Homes',
            url: '#'
        },
        {
            name: 'Buy or Sell',
            url: '#'
        },
        {
            name: 'Contact Me',
            url: '#'
        },
    ];
    return (
        <footer>
            <div className="container">
                <section className="cmpny">
                    <section className="cmpny__brand">
                        <p><span className="bold">ALDEN</span> CASAS</p>
                        <ul className="social"> 
                            {socialLinks.map(link => {
                                return(<li className="social__link" key={link.name}><a href={link.src}><img src={link.img} alt={link.alt}/></a></li>)
                            })}
                        </ul>s
                    </section>
                    <ul className="cmpny__links">
                        {siteLinks.map(link => {
                            return (<li className="link" key={link.name}><a href={link.url}>{link.name}</a></li>)
                        })}
                    </ul>
                    <section className="cmpny__address"></section>
                </section>
                <hr id="gray-line"/>
                <p className="copyrights"> &copy; No Rights Reserved - Project Brief</p>
            </div>
        </footer>
    )
}
