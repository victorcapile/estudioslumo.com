import './App.css';
import { Link } from 'react-scroll';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';

function App() {
  
  // variáveis 

  const gradientStyleR = {
    height: '100%',
    background: 'linear-gradient(to right, #ED4775, #7A47ED)',
    display: 'flex'
  };
  

// começa o site

    return (
      <div className="App" id='element-id-home'>
        <header className="App-header">
    
          <div className='headerButtons'>
          <Link className='logoLumo' to='element-id-home' smooth={true}>
           <img src='lumologo.jpeg' alt='logo da lumo'/>
          </Link>
            <Link href="/about" className='linkStyle'  to='element-id-about' smooth={true}>About</Link>
            <Link href="/work" className='linkStyle' to='element-id-work' smooth={true}>Work</Link>
            <Link href="/us" className='linkStyle' to='element-id-us' smooth={true}>Us</Link>
            <Link href="/iara" className='linkStyle2'>IARA</Link>  
          </div>

          <div class="black-bar">
            <SocialIcon className="social-icon" url="/..."  network="linkedin" />
            <SocialIcon className="social-icon" url="/..."  network="twitter" />
            <SocialIcon className="social-icon" url="/..."  network="vimeo" />
            <SocialIcon className="social-icon" url="/..."  network="discord" />
          </div>     

        </header>  
          
      <div className='video-container'>      
      <video autoPlay muted className='video' src='.\LUZES DE COPA FINAL_Trim.mp4' type="video/mp4"/>
      <div className='video-text'>
      We Are a Filmtech Company<br/>Building Solutions For People<br/>Over The World Wide Web.<br/> 
          <a href='https://twitter.com/estudioslumo'  className='work-with-us' target='https://twitter.com/estudioslumo'>wanna work with us? let's talk! ➝</a> 
      </div>
      </div>

      <div className='ourServices' id="element-id-about">

        <div style={gradientStyleR}>

          <section>    

            <div className='card'>
            
              <h1>AUDIOVISUAL 🎥</h1>
              <p class='card-text'>With the right combination of sound, image and storytelling, we make sure to capture all the fond memories and feelings from your event. We do this in a way that is in the style of both your, and the event's, identity.</p>
            </div>
            
            <div className='card'>
              <h1>UI/UX DESIGN 🖌️</h1>
              <p class='card-text'>The visual impact and the overall experience of a product is what makes it stand out. Combining a modern look with a minimalist touch, we create graphic pieces that translate the essence of your business.</p>
            </div> 
            
            <div className='card'>
              <h1>WEB DEVELOPMENT 💻</h1>
              <p class='card-text'>We know that a well-structured website brings credibility to a brand. That's why we create responsive websites and web products for your business to take off!</p>
            </div>  

            <div className='card'>
              <h1>MUSIC 🎵</h1>
              <p class='card-text'>We are creative video experts with a passion for good music. We understand that a music video is a key part of your brand and marketing strategy. We produce for the small and ambitious to the big and established artists. </p>
            </div> 

          </section> 
        </div>      

      </div>

      <div className='textoGrande' id="element-id-work">
      <h2>Explore Our Creations:</h2>
      </div>
      
      <div className='ourCreations'>
        <div>
          
        </div> 

      </div>


      <div className='theTeam' id="element-id-us"> 
         
         <div style={gradientStyleR}>
            <div className='mari'>
              <img src='./mari.jpeg' className='mariFoto' alt='lumosimbolo'/>
              <h2>Marianna Quintanilha</h2>
              <p className='subText'>Screenwriter & Photographer</p>
              <SocialIcon url="/..."   network="linkedin" />
              <SocialIcon url="/..."  network="instagram" />
            </div>
            
            <div className='theTeamText'>The Team. <i><b>Our Soul.</b></i>
              <h5>Mari and Victor have been working together for the last 03 years, solving and developing creative solutions for people and companies from the most diverse segments.</h5>
            </div>

            <div className='victo'>
              <img src='./victor.jpg' className='victorFoto' alt='lumosimbolo'/>
              <h2>Victor Capilé</h2>
              <p className='subText'>Filmmaker & Web Designer</p>
              <SocialIcon className="social-icon" url="/..."  network="linkedin" />
              <SocialIcon className="social-icon" url="/..."  network="instagram" />
            </div>
            
         
         </div>  
      </div>
         
         <h2 className='NumbersText'>Our Trusted Clients</h2> 
         <div className='imgClients'>
          
          <Link className='logoTecnodz'>
            <img src="\tecnodz.png" alt="logo da tecnodz"/>
          </Link>
          
          <Link className='logoLumiere'>
            <img src="\lumiere-logo.png" alt="logo da lumiere" />
          </Link>

          <Link className='logoFractal'>
            <img src="\fractal.png" alt="logo da fractal" />
          </Link>

    
          
         <p className='p2023'>© 2023 Estúdios Lumo</p>
         </div>
        
         </div>
        
  );
}


library.add(faFacebook)

export default App;