import React from 'react';
import '../styles/components/certification.css';
import sfc from '../assets/images/scrum-sfc.png';
import sfpc from '../assets/images/scrum-sfpc.png';
import lll from '../assets/images/scrum-lll.png';

export default function Certification() {
    return (
        <main>
            <div className="title">
                    <h1>- Certificações</h1>            
                </div>

                <div className="certifications">
                    <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-PleitersonAmorim-779075.pdf">
                        <img src={sfc} alt="Scrum SFC" title="Scrum Fundamentals Certified (SFC)" className="certifi"/>
                    </a>
                    <a href="https://www.youracclaim.com/badges/750429a6-9f36-4ebf-9c35-5e7cf909ca68/linked_in">
                        <img src={sfpc} alt="Scrum SFPC" title="Scrum Foundation Professional Certificate (SFPC)" className="certifi"/>
                    </a>
                    <a href="https://www.youracclaim.com/badges/6ba05a04-10f6-4eb0-aeaf-31496067a14a/linked_in">
                        <img src={lll} alt="Lifelong Learning" title="Lifelong Learning (LLL)" className="certifi"/>
                    </a>
                    {/* <a href="">
                        <img src="" alt="" title="" className="certifi"/>
                    </a> */}
                </div>
        </main>
    );
}