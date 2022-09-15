import React from 'react'
import Logo from '../Header/Logo/Logo'
import './_footer.scss';

export default function Footer() {
    return (
        <>
            <footer>
                <section className="footer-container">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <Logo />
                            <div className="mt-4">
                                <label className="label-text">SUBSCRIBE TO OUR NEWSLETTER</label>
                                <div className="d-flex align-items-center input-container">
                                    <input type="email" className="input-field form-control" placeholder="Your Email Address" />
                                    <i class="fa-solid fa-arrow-right rightarrow"></i>
                                </div>

                            </div>
                            <div className="mt-4">
                                <span className="label-text">FOLLOW US</span>
                                <div class="mt-3 icons-container">
                                    <a href="#0" class="icon-facebook icons"></a>
                                    <a href="#0" class="icon-twitter icons"></a>
                                    <a href="#0" class="icon-insta icons"></a>
                                    <a href="#0" class="icon-icons8-youtube-logo icons"></a>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="label-text">DOWNLOAD APP</span>
                                <div>
                                    <button type="button" className="footer-store-button">
                                        <img src="./images/google_play_store_logo.png" alt="GooglePlay" />
                                        <span className="content-space">Google Play</span>
                                    </button>
                                    <button type="button" className="footer-store-button">
                                        <img src="./images/apple_store_logo.png" alt="GooglePlay" />
                                        <span className="content-space">App Store</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-xl-7">
                            <div className="col-12">
                                <span className="stocks-text">STOCKS</span>
                                <p className="alphabets">A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | OTHERS  </p>
                            </div>
                            <div className="col-12 bottom-line">
                                <span className="stocks-text">MUTUAL FUNDS</span>
                                <p className="alphabets">A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | OTHERS  </p>
                            </div>
                            <div className="d-md-flex">
                                <div className="col-5 col-md-3 col-xl-3">
                                    <h4 className="footer-list-title">MINTGENIE</h4>
                                    <ul className="footer-links p-0 mt-3">
                                        <li><a href="#0" className="footer-list">About Us</a></li>
                                        <li><a href="#0" className="footer-list">Contact Us</a></li>
                                        <li><a href="#0" className="footer-list">Support/Feedback</a></li>
                                        <li><a href="#0" className="footer-list">Disclaimer</a></li>
                                        <li><a href="#0" className="footer-list">Privacy Policy</a></li>
                                        <li><a href="#0" className="footer-list">Cokie Policy</a></li>
                                        <li><a href="#0" className="footer-list">Terms & Conditions</a></li>
                                        <li><a href="#0" className="footer-list">Glossary</a></li>
                                        <li><a href="#0" className="footer-list">Faqs</a></li>
                                        <li><a href="#0" className="footer-list">Sitemap</a></li>
                                    </ul>
                                </div>
                                <div className="col-5 col-md-3 col-xl-3">
                                    <h4 className="footer-list-title">NEWS</h4>
                                    <ul className="footer-links p-0 mt-3">
                                        <li><a href="#0" className="footer-list">Latest</a></li>
                                        <li><a href="#0" className="footer-list">Markets</a></li>
                                        <li><a href="#0" className="footer-list">Mutual Funds</a></li>
                                        <li><a href="#0" className="footer-list">Money</a></li>
                                        <li><a href="#0" className="footer-list">Lounge</a></li>
                                        <li><a href="#0" className="footer-list">Insurance</a></li>
                                        <li><a href="#0" className="footer-list">Opinion</a></li>
                                        <li><a href="#0" className="footer-list">Industry</a></li>
                                        <li><a href="#0" className="footer-list">Politics</a></li>
                                        <li><a href="#0" className="footer-list">Start-Ups</a></li>
                                        <li><a href="#0" className="footer-list">Technology</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-xl-3">
                                    <h4 className="footer-list-title">TOOLS</h4>
                                    <ul className="footer-links p-0 mt-3">
                                        <li><a href="#0" className="footer-list">Tax Calculator</a></li>
                                        <li><a href="#0" className="footer-list">Returns Calculator</a></li>
                                        <li><a href="#0" className="footer-list">Sip Calculator</a></li>
                                        <li><a href="#0" className="footer-list">Power of Compounding</a></li>
                                        <li><a href="#0" className="footer-list">Loans Calculator</a></li>
                                        <li><a href="#0" className="footer-list">Insurance Calculator</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-xl-3">
                                    <h4 className="footer-list-title">PARTNER SITES</h4>
                                    <ul className="footer-links p-0 mt-3">
                                        <li><a href="#0" className="footer-list">Mint</a></li>
                                        <li><a href="#0" className="footer-list">Livehindustan</a></li>
                                        <li><a href="#0" className="footer-list">Shine</a></li>
                                        <li><a href="#0" className="footer-list">Desimartini</a></li>
                                        <li><a href="#0" className="footer-list">Studymate</a></li>
                                        <li><a href="#0" className="footer-list">Englishmate</a></li>
                                        <li><a href="#0" className="footer-list">Htsyndication</a></li>
                                        <li><a href="#0" className="footer-list">HT Brand Studio</a></li>
                                        <li><a href="#0" className="footer-list">Health Shots</a></li>
                                        <li><a href="#0" className="footer-list">HT Auto</a></li>
                                        <li><a href="#0" className="footer-list">Ht Bangla</a></li>
                                        <li><a href="#0" className="footer-list">HT Smartcast</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </section>
                <section className="copyright-sec">
                    <div className="container">
                        <p className="copyright-info">Copyright &copy; HT Digital streams Ltd. All Rights Reserved.</p>
                    </div>
                </section>
            </footer>
        </>
    )
}
