import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <section className="ft-info">
                    <section className="brand">
                        <p><span className="bold">ALDEN</span> CASAS</p>
                        <ul className="links">
                            <li className="link"><a href="#"><img src="" alt=""/></a></li>
                            <li className="link"><a href="#"><img src="" alt=""/></a></li>
                            <li className="link"><a href="#"><img src="" alt=""/></a></li>
                            <li className="link"><a href="#"><img src="" alt=""/></a></li>
                            <li className="link"><a href="#"><img src="" alt=""/></a></li>
                        </ul>
                    </section>
                    <ul className="links">
                        <li className="link"><a href="#">About Alden</a></li>
                        <li className="link"><a href="#">Search Homes</a></li>
                        <li className="link"><a href="#">Buy or Sell</a></li>
                        <li className="link"><a href="#">Contact Me</a></li>
                    </ul>
                    <section className="addy"></section>
                </section>
                <hr className="gry"/>
                <p className="copyrights"> &copy; No Rights Reserved - Project Brief</p>
            </div>
        </footer>
    )
}
