import React from 'react';
import '../styles/pages/contatos.css';
import Footer from '../components/footer';
import imgLogo from '../assets/images/logo.png';
import nuvem from '../assets/images/nuvemplei.png';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github2.svg';
import sourcerer from '../assets/images/sourcerer.png';
import rocketseat from '../assets/images/rocketseat.jpeg';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.png';
import qrcodelinkedin from '../assets/qrcodes/qr_code-linkedin.png';
import qrcodegithub from '../assets/qrcodes/qr_code-github.png';
import qrcodesourcerer from '../assets/qrcodes/qr_code-sourcerer.png';
import qrcoderocketseat from '../assets/qrcodes/qr_code-rocketseat.png';
import qrcodeinstagram from '../assets/qrcodes/qr_code-instagram.png';
import qrcodetwitter from '../assets/qrcodes/qr_code-twitter.png';
import qrcodefacebook from '../assets/qrcodes/qr_code-facebook.png';
import qrcodeyoutube from '../assets/qrcodes/qr_code-youtube.png';

export default function Contatos() {
    return (
        <>
            <header>
                <div className="back">
                    <a href="/">
                        <img src={imgLogo} alt="Voltar"/>
                    </a>
                </div>
            </header>

            <div className="titulo">
                <h1>Visite e entre em contato em uma das redes sociais abaixo</h1>        
            </div>

            <section className="contatos">
                <div className="item">
                    <a href="https://www.linkedin.com/in/pleiterson/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" title="LinkedIn" className="rede"/>
                    </a>
                    <img src={qrcodelinkedin} alt="QR Code LinkedIn" title="QR Code LinkedIn" className="qrcode"/>
                    <p>LinkedIn</p>
                </div>
                <div className="item">
                    <a href="https://github.com/Pleiterson" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" title="GitHub" className="rede"/>
                    </a>
                    <img src={qrcodegithub} alt="QR Code GitHub" title="QR Code GitHub" className="qrcode"/>
                    <p>GitHub</p>
                </div>
                <div className="item">
                    <a href="https://sourcerer.io/pleiterson" target="_blank" rel="noopener noreferrer">
                        <img src={sourcerer} alt="Sourcerer.io" title="Sourcerer.io" className="rede"/>
                    </a>
                    <img src={qrcodesourcerer} alt="QR Code Sourcerer.io" title="QR Code Sourcerer.io" className="qrcode"/>
                    <p>Sourcerer.io</p>
                </div>
                <div className="item">
                    <a href="https://app.rocketseat.com.br/me/pleiterson" target="_blank" rel="noopener noreferrer">
                        <img src={rocketseat} alt="Rocketseat" title="Rocketseat" className="rede"/>
                    </a>
                    <img src={qrcoderocketseat} alt="QR Code Rocketseat" title="QR Code Rocketseat" className="qrcode"/>
                    <p>Rocketseat</p>
                </div>
                <div className="item">
                    <a href="https://www.instagram.com/pleiterson/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" title="Instagram" className="rede"/>
                    </a>
                    <img src={qrcodeinstagram} alt="QR Code Instagram" title="QR Code Instagram" className="qrcode"/>
                    <p>Instagram</p>
                </div>
                <div className="item">
                    <a href="https://twitter.com/pleiterson" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" title="Twitter" className="rede"/>
                    </a>
                    <img src={qrcodetwitter} alt="QR Code Twitter" title="QR Code Twitter" className="qrcode"/>
                    <p>Twitter</p>
                </div>
                <div className="item">
                    <a href="https://www.facebook.com/pleiterson.amorim" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" title="Facebook" className="rede"/>
                    </a>
                    <img src={qrcodefacebook} alt="QR Code Facebook" title="QR Code Facebook" className="qrcode"/>
                    <p>Facebook</p>
                </div>
                <div className="item">
                    <a href="https://www.youtube.com/user/pleiterson" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" title="YouTube" className="rede"/>
                    </a>
                    <img src={qrcodeyoutube} alt="QR Code YouTube" title="QR Code YouTube" className="qrcode"/>
                    <p>YouTube</p>
                </div>
                {/* <div className="item">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={} alt="" title="" className="rede"/>
                    </a>
                    <img src={} alt="QR Code " title="QR Code " className="qrcode"/>
                    <p>LinkedIn</p>
                </div> */}                
            </section>            
            
            {/* <div className="nuvem">
                <img src={nuvem} alt="Nuvem de palavras" title="Nuvem de palavras"/>
            </div> */}

            <footer>
                <Footer />
            </footer>
        </>
    );
}