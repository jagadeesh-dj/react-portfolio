import '../index.css'
import { Link } from 'react-router-dom';
import Profile from '../image/jagadeesh d-modified.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home(){
    return (
        <section id="home">
           <div className='page1'>
                <div id="social-media"  data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-out">
                    <div>
                        <Link><FaLinkedinIn /></Link>
                    </div>
                    <div>
                        <Link><FaGithub /></Link>
                    </div>
                    <div>
                        <Link><SiGmail /></Link>
                    </div>
                </div>
                <div id='summary' data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-out">
                    <div id='objective'>
                        <small>Hi Myself</small>
                        <h1>Jagadeesh</h1>
                        <p>Recent graduate in Data Science & Business Analytics and I'm passionate about Data Scientest and ML Engineer role and eager to start my careeer in this field.</p>
                    </div>
                    <div id="btn">
                        <Link id='hire'>Hire Me</Link>
                        <Link id='cv'>Download CV</Link>
                    </div>
                </div>
                <div id='image'  data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-out">
                    <img src={Profile} alt="picture" width={100} height={100} />
                </div>
           </div>
        </section>
    )
}
export default Home;