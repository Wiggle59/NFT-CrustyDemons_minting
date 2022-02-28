import React from 'react'
import {Container} from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import '../index.css';

export default function Term() {
    return(
        <section id="term">
            <Container>
                <h1>
					<Link to="/">TERMS & CONDITIONS</Link>
					<span className="go_mainpage"><Link to="/"> - GO TO MAIN PAGE - </Link></span>
				</h1>
				<p>
					This website is owned and operated by Club Virtual Pty Ltd (ACN 653 514 231), which is the owner of the Crusty Demons NFT concept, design and all associated intellectual property (“IP”) including the domain name crustydemons.club. Crusty Demons is the owner of the Crusty Demons logo and all associated IP.  Throughout the site and these Terms & Conditions, the term "we", "us", “our”, “Company", “CDC”, “crustydemons.club”, “CV” as the context may require, refer to Club Virtual Pty Ltd. By visiting our site and/or purchasing something from us, you engage in our service (“Service”) and agree to be bound by the following terms and conditions (“Terms”).
				</p>
				<p>
					We reserve the right to update, change or replace any part of these Terms of services without prior written notice at any time, and it is your responsibility to periodically review these Terms to stay informed of updates. Any changes to the Terms will be in effect as of the last updated referenced on the site and at the top of these Terms.
				</p>
				<p>
					Your continued use of this site after the last updated date will constitute your acceptance of agreement.
				</p>
				<p style={{display: 'block'}}>
					By visiting the website of our products merchants, in particular  <span> <a href="http://www.opensea.io" target="_blank" rel="noreferrer">www.opensea.io</a></span> or <span> <a href="http://clubvirtual.io" target="_blank" rel="noreferrer">clubvirtual.io</a></span> as the case may be, you also engage and agree to be bound by their terms and conditions.
				</p>
				<p>
				This website is for informational purposes and serves as a binding contract for purchasers of CDC NFTs.
				</p>
				<p>
					CDC NFTs is a generative collection of digital artwork (NFTs) housed and run on the Ethereum Network. Users and collector of these NFTs are solely responsible for the safety and the management of their own private assets, which include but are not limited to Ethereum wallets, validating all transactions and contracts generated by this website prior to and after purchases.
				</p>
				<p>
					Users certify through purchase that they understand that, as the CDC smart contract runs on the Ethereum network and is bound by their system and terms, there is no ability to undo, reverse, or restore any transactions.
				</p>
				<p>
					Any connected services included this website are provided “as is” and “as available” without any warranty of any kind. Use of this website constitutes your agreement that you are accepting sole responsibility for any and all transactions involving CDC digital collectibles.
				</p>
				<p>
					By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence.
				</p>
				<p>
					You may not use our products and/or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
				</p>
				<h1>
					OWNERSHIP, USAGE & IP
				</h1>
				<p>
					When you purchase your CDC NFT, you own the NFT. The ownership is transferred to you on the Ethereum blockchain for that individual piece of art, combination of traits and number. Ownership of the NFT is ruled by the smart contract and the Ethereum Network terms. We have no ability to alter, freeze, seize or modify the ownership of any CDC NFT.
				</p>
				<p>
					All buyers acknowledge and agree that, following the purchase of any CDC NFT on the website, they do not have any legal ownership right, or title to any copyrights, trademarks or other intellectual property rights to the underlying artwork of the CDC NFT. All copyrights and intellectual property rights in the underlying artwork shall remain vested in CV (or in the case of the Crusty Demons logo shall vest in Crusty Demons), including but not limited to the right to reproduce, to prepare derivative works, to display, to perform and to distribute the artworks.
				</p>
				<p>
					Following the purchase of a CDC NFT on the website, the buyer may display or perform the CDC NFT publicly or privately for the purposes of promoting, sharing, discussing or commenting on the buyer’s purchase, ownership or interest in the CDC NFT.
				</p>
				<p>
					The buyer of CDC NFT may display or perform the NFT on:
				</p>
				<p>
					<span className="subitem">(a)</span>third party platforms in association with an offer to sell or trade the NFT; and
				</p>
				<p>
					<span className="subitem">(b)</span>within decentralised virtual environments (including other NFT marketplaces, virtual or physical galleries and virtual or physical museums).
				</p>
				<p>
					The buyer acknowledges and agrees that it may not, nor permit any third party, without the prior written consent of CV:
				</p>
				<p>
					<span className="subitem">(a)</span>make “commercial use” of any underlying artwork to the NFT including by selling the copies of, access to the artwork or otherwise commercially exploiting the artwork;
				</p>
				<p>
					<span className="subitem">(b)</span>modify, distort or modify the artwork in a way which would be prejudicial to the Artist’s interests;
				</p>
				<p>
					<span className="subitem">(c)</span>use the artwork to advertise, market or sell any third-party product or service;
				</p>
				<p>
					<span className="subitem">(d)</span>use the artwork in connection with any form of media that depicts hatred, intolerance, violence, cruelty or anything else that may be considered hate speech;
				</p>
				<p>
					<span className="subitem">(e)</span>sell, distribute for commercial gain, or otherwise commercialise merchandise that includes the artwork;
				</p>
				<p>
					<span className="subitem">(f)</span>attempt to trademark, copyright or otherwise acquire additional intellectual property rights in or to the artwork;
				</p>
				<p>
					<span className="subitem">(g)</span>attempt to mint an NFT representing the same artwork; and
				</p>
				<p>
					<span className="subitem">(h)</span>falsify, misrepresent, or conceal the ownership of the artwork or the NFT. 
				</p>
				<h1>
					FEEDBACK
				</h1>
				<p style={{marginBottom: '3rem'}}>
					You can submit comments, bug reports, ideas about the site or the project. By submitting any feedback, you agree that we are free to use them in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive worldwide licence to incorporate and use the feedback for any purpose.
				</p>
            </Container>
        </section>
    )
}