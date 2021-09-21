import React from 'react' 
import './home.css';
//import Footer from '../components/Footer/Footer'
//import Header from '../components/Header/Menu'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Telegram from '../assets/telegram.svg'
// import Twitter from '../assets/twitter.svg'
// import '../components/styles/Home.css'
// import adaantsgif from '../assets/adaantsgif.gif'
// import adaantsgif1920 from '../assets/adagif1920.gif'
// import mobilegif from '../assets/mobilegifada.gif'
// import ipadgifada from '../assets/ipadgifada.gif'
// import aboutusimg from '../assets/aboutusimage.svg'
// import david from '../assets/david.webp'
// import rajendra from '../assets/rajendra.webp'
import MenuIcon from '../../assets/images/menu.svg'
 import cardanoLogo from '../../assets/images/cardanologo.png'
// import { Helmet } from "react-helmet";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      feedbackMsg:''
    }
  }

  // handleChange = event => {
		// const { name, value } = event.target;
		// this.setState({
		// 	[name]: value
  //   })
  // } 

  // handleSubmit = (event) =>{
  //   event.preventDefault();
  //   event.target.reset();
  //   var myHeaders = new Headers();
  //   myHeaders.append("Cookie", "_abck=D88A13BEFD79B2AB331EFAB0DDDE61FE~-1~YAAQtUU5FxUVq3Z7AQAA67ysfQa2xj59XgRDaRYhRYV7rLRFCNxCg6B/KeALQjdEqIavZW06y0zs5/CwMB0vjOkTeVYx+elMVOIRCk2rGMT53fopSIfzsDZlonxxc/NWrd1AK+maZx4CJTfmM7mjzRdvVAHTIV9YaGUlpX+HuNUcbni2e3zTp49BKbGllEqhqRQI22HcWU+SoDjjnJoeRpywFyTZ36sFWGX1EG/IJ5z3PzSaWJYDRTIV9iynOGzQz9rZ1lxDU2NtSsUGOrWAiTibAzrOV8vou/i+mia+rjMPK+BR4w2N19y7zCx5JEIEMmnnLcLeEfOVYvecBz4QDVnyByJv7tYOKle1xXdx7pYPS81/SXB2lHNBymTEYg==~-1~-1~-1; bm_sz=E115533D3B48A6B79459B23BCC0F1CF4~YAAQtUU5FxcVq3Z7AQAA67ysfQz4LWDkPbrCbXhVRZTazh+lev+xS2vCwWQuTedlznmT7blwGySoLXZ1Y+86ydOhaXvIVYB7i6EBehysbSGZkLeCjn5Bke9UiiY7rp4tZxE6N70j0h2DEXNlPPwe8dglXWT5Jc+MNIlVwuzyuZds0+RcKGocGY9PLjJpiuf69mo3xsajdqug3fXDAqR+6H8vcuDARWtvELFnf2QD5z6iXb2SN1p5Svoil0MHv6FFXi3T28DorD2gxdkGxjO9evLMeYV5IuypALYT+5vbBCqGXdrpFKc4lg==~3617079~3618104; ak_bmsc=15BDCBEDDB6566D665D37148553A9F19~000000000000000000000000000000~YAAQtUU5FxYVq3Z7AQAA67ysfQyppT0cXBOVDEby4jPhxExV0ZW7RlJ7ROFqp9e7i7zImpVXWKe3tJf6uMgnCiBjOztcmRWh0EePiTTrUUMcJr6JMvnI3r3zujlJpnSCLbIm4f6cv9g/S8Qco9nqR2qLXlSEpCWWyIHXKpJs3elSwfrfPROeRXGUzw3HKh6T4v0OvzXxjx9niy1s5tze7tmUhMFfGOPnGS4HQP3h6weL63u5P8kJWloo4mjteAMvg0EAiNKZwfkHiIMLKCeZ62+flRM0bq0//VdQn+5EAjU40/Lus8s2SSEqIjgeDpiTivsXsvACXBeQiWZ/Jf+8uogxXUJuqSS/YKg8wg5vfzkQuLiUsLTvepJVbfn0lox+8Lor804=; _mcid=1.7e2f8101abe9bd74421ff20d348a230a.93e6273172f445274f095d9dd2f9403f67982d90c9b1eacb492481b62e12a36a");
  //   myHeaders.append("Access-Control-Allow-Origin", "*");
  //   myHeaders.append("Access-Control-Allow-Headers", "X-Requested-With");

  //   var formdata = new FormData();
  //   var formdata = new FormData();
  //   formdata.append("EMAIL", this.state.email);
  //   formdata.append("FNAME", this.state.name);
  //   formdata.append("SUBJECT", "home_subscribe_form");

  //   var requestOptions = {
  //     method: 'POST',
  //     mode:'no-cors',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow'
  //   };

  //   fetch("https://gmail.us5.list-manage.com/subscribe/post?u=176688e3f37cc720dcbb1aedd&amp;id=07469d490d", requestOptions)
  //   .then((response) => {
  //     console.log(response);
  //     this.setState({
  //       feedbackMsg: "Thank you for Subscribing!",
  //       name:'',
  //       email:''
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

  // }

  render(){
    return(
      <>
     {/* <Header path="/"/>*/}
      {/*<Helmet>
        <meta charSet="utf-8" />
        <title>Adaants Home Page</title>
        <meta id="meta-description" name="description" content="We're Cardano Ecosystem Builders" />
        <link rel="canonical" href="https://adaants.com" />
      </Helmet>*/}
      {/*<div className="cardanobuilders">
        <div className="werecardano">We're Cardano</div>
        <div className="ecosystem">Ecosystem Builders</div>
        <div className="cardanosubheading">We are a Blockchain consulting company focused on building innovative products on top of the Cardano Blockchain.</div>
        <div className="cardanologo"><img src={cardanoLogo} alt="cardano-logo"/></div>
        <div className="cardanogif">
          <img className="ada1280gif"src={adaantsgif} alt="Adagif" />
          <img className="ada1920gif" src={adaantsgif1920} alt="Adagif" />
          <img className="mobilegif" src={mobilegif} alt="Adagif" />
          <img className="ipadgif" src={ipadgifada} alt="Adagif" />
        </div>
      </div>
      <div className="whatwedo">
        <div className="backgroundclr">What We Do</div>
        <div className="wedo">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 wedocard1">
                <div className="card-body">
                  <div className="number">1</div>
                  <h3>Develop Cardano Apps</h3>
                  <p>Convert your idea into user-facing DApps, Wallets, and NFTs on top of Cardano Blockchain.</p>
                </div>
              </div>
              <div className="col-lg-3 wedocard1">
                <div className="card-body">
                  <div className="number">2</div>
                  <h3>Enhance Cardano Ecosystem</h3>
                  <p>Extend critical Cardano infrastructure and develop libraries, APIs, SDKs, and tooling which enables the adoption of Cardano.</p>
                </div>
              </div>
              <div className="col-lg-3 wedocard1">
                <div className="card-body">
                  <div className="number">3</div>
                  <h3>Create and Run Cardano Stake Pools</h3>
                  <p>We operate user-friendly stake pools for new users with enhanced security and zero variable fees. We also help you set up stake pools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eelDiv">
        <div className="subscribeheading">Stake your ADA with with our pool - "EEL".</div>
        <div className="eelDiv2">
          <p>EEL is a small but dedicated stake pool built to provide maximum rewards (currently at 5.56% return on stake). The EEL stake pool is proud to take a small portion of our profits and donate to the <a href="https://www.woundedwarriorproject.org/" target="_blank">Wounded Warrior Project.</a></p>
          <p>From your Daedalus or Yoroi wallets, search for "EEL" pool and click delegate to start gaining ADA staking rewards.</p>
          <div className="eelSubDiv"> 
            <a href="https://www.eelada.com/" target="_blank">https://www.eelada.com/</a>
          </div>
        </div>
      </div>
      <div className="howmuch">
        <div className="howmuchbox">
          <div className="howmuchdescription">
            <div className="howmuchimage">
              <img src={howmuchimg} alt="howmuchimage" />
            </div>
            <div className="howmuchdesc">
              <div className="subscribeheading">How Much Did You Miss?</div>
              <p className="howmuchsubheading">If you invested $1000 in ADA in Dec 2017, you'd have over $6000 worth of ADA now!</p>
              <div className="buttonContainer">
                <button className="help-button-container" onClick={() => window.location.href="/ada-ecosystem"}>Caluclate Possible Earnings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourteam">
        <div className="teambackgroundclr"> Our Team</div>
        <div className="team">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 teamcard1">
                <div className="card-body">
                  <div style={{display:"flex"}}>
                    <img src={david} alt="Girl in a jacket" className="davidImg"/>
                    <div style={{display: "flex", flexDirection: "column",marginTop:'2%'}}>
                    <h3>David A. Ealy</h3>
                    <h6 className="sub-text">Managing Partner, ADAants</h6>
                    </div>
                  </div>
                  <p>Dr. David Ealy, an alumnus of West Virginia University, is a Cardano evangelist since 2017. He is passionate about blockchain technology, the DeFi revolution, and staking on Cardano. David is a stake pool operator (EEL pool). David is also passionate about supporting the ASPCA and WV-based charities. He has varied experiences in online learning, SAP, blockchain, and gaming. As a project management professional, he has successfully delivered high-profile projects throughout his career for startups and big companies. David’s unique skills in technology, program management, and business development, his network, and partnerships in Africa and the USA make him the driving force of ADAants.</p>
                </div>
              </div>
              <div className="col-lg-5 teamcard1">
                <div className="card-body">
                  <div style={{display:"flex"}}>
                  <img src={rajendra} alt="Girl in a jacket" className="davidImg"/>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Rajendra Prasad Murakonda</h3>
                    <h6 className="sub-text">Managing Partner, ADAants</h6>
                    </div>
                  </div>
                  <p>Raj, an alumnus of MIT Sloan, has unique skills in technology, product management, and business strategy. Raj is passionate about blockchain and built identity and KYC solutions on top of Ethereum blockchain. An incoming Plutus Pioneer, he has scaled the technology and business of many successful startups all over the world. His network and partnerships at MIT and other big firms, and his end-user focused approach makes him invaluable to helping blockchain startups at ADAants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutheading">About Us</div>
        <div className="abtdesc">
          <div className="aboutdescription">
            <p className="aboutsubdesc">Our team has been helping startups for over a decade and scaled products to millions of users. Dr. Ealy is an active member of the Crypto investing community in the USA and has close ties with Africa (Rwanda). Mr. Murakonda and few members of the tech team are incoming Plutus Pioneers.</p>
            <p className="aboutsubdesc_2">The ADAants team has built identity, KYC, and e-signing solutions in the blockchain. The ADAants team has proven deep knowledge of the full Cardano ecosystem: ideation of protocols, creating crypto libraries, running stake pools, mining, and investing in upcoming blockchain technologies, and more.</p>
          </div>
          <div className="aboutimage">
            <img className="aboutadaimg" src={aboutusimg} alt="AdaCardanoimage"/>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribebox">
          <div className="subscribeheading">Subscribe to ADAants Munch</div>
          <p className="subscribesubheading">Subscribe to the first-of-its-kind newsletter, ADAants March, to receive the latest news and exclusive deals of Cardano.</p>
          <div classname="subscribeform">
            <form method="POST" onSubmit={this.handleSubmit}>
              <input className="yourname" type="text" placeholder="Your name" value={this.state.name} onChange={this.handleChange} name="name" id="FNAME"/>
              <input className="emailaddress" type="text" placeholder="Your Email Address" value={this.state.email}  onChange={this.handleChange} name="email" id="MERGE0"/>
              <span className="subscribe-button-container">
                <button className="help-button-container">Subscribe</button>
              </span>
              <p className="subscribesubheading">{this.state.feedbackMsg}</p>
            </form>
          </div>
        </div>
      </div>
      <div className="joincommunity">
        <h1 className="communityheading">Join the Community</h1>
        <a href="https://t.me/joinchat/d23hZI-NFnhlY2E1" target="_blank"><img src={Telegram} alt="telegram"/></a>
        <a href="https://twitter.com/adaants" target="_blank"><img src={Twitter} alt="twitter"  /></a>
      </div>*/}
      <div className="header">
        <div className="logo"></div>
        <div className="menu"></div>
        {/* <div className="menuIcon"> */}
          <img className="menuIcon" src={MenuIcon} />
          {/* </div> */}
      </div>
      <div className="section1">
        <div className="heading1"></div>
        <div className="image1">
          <img className="image_1" src={cardanoLogo} alt="cardano-logo"/>
        </div>
      </div>
      <div className="subsection1">
        
      </div>
        <div className="gif">
      </div>
      <div className="whatwedo_bg">
        {/* <div className="whatwedo">
        
        </div>
        <div className="whatwedo_section">
          <div className="whatwedo_section_data">
            
          </div>
          <div className="whatwedo_section_data">
          
          </div>
          <div className="whatwedo_section_data">
          
          </div>
        </div> */}
              <div>
        <div className="whatwedo">
          <div className="whatwedoHeaderMain">
          <div className="whatwedoHeader"></div>
          </div>
          <div className="boxsection">
            <div className="box1">
              <div className="number"></div>
              <div className="boxHeader"></div>
              <div className="boxDescription"></div>
            </div>
            <div className="box1">
              <div className="number"></div>
              <div className="boxHeader"></div>
              <div className="boxDescription"></div>
            </div>
            <div className="box1">
              <div className="number"></div>
              <div className="boxHeader"></div>
              <div className="boxDescription"></div>
            </div>
          </div>
        </div>
      </div>
      </div> 
      
      <div className="eel_section">
        <div className="eel_header">

        </div>
        <div className="eel_para">

        </div>
      </div>
      <div className="earning_calc">
        <div className="earning_calc_img">

        </div>
        <div className="earning_calc_section">
          <div className="earning_calc_header">

          </div>

          <div className="earning_calc_para">

          </div>
          <div className="earning_calc_btn">

          </div>
        </div>
      </div>
      <div className="blackband">

      </div>
      <div className="our_team">

      </div>
      <div className="about_us">

      </div>
      <div className="subscribe">

      </div>
      <div className="join">

      </div>
      <div className="footer">
        
      </div>
      {/*<Footer />*/}
      </>
    )
  }
}

export default Home