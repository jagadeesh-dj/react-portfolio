
import '../index.css'
import Image from '../image/images.png'
import { Link } from 'react-router-dom';
import { FaUserGraduate } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { HiBackspace, HiCheckBadge } from "react-icons/hi2";

function About(){
    return (
        <section id="about">
            <div className="page2">
                <div id='title'>
                    <p>Introduction</p>
                    <h1>About Me</h1>
                </div>
                <div id='content1'>
                    <div id="aboutme" data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in-out">
                        <p> Hello! I am a Recent graduate with a Master of Science in Data Science & Business Analytics. During my academic period I gained strong foundation in data analytics, machine learning and statistical modeling. I excel at transforming data into actionable insights and developing innovative solution to complex problems.
                            My passion for software development and machine learning model creation has driven me to continuously expand my skill set. I gained hands-on experience in Python full-stack development 
                            and machine learning during my internship and which provided me with practical skills and understanding of real-world applications.
                        </p>
                
                    </div>
                    <div id='boxes'>
                        <div id='card' data-aos="fade-down" data-aos-delay="600" data-aos-easing="ease-in-out">
                            <div id='icon'>
                                <FaUserGraduate />
                            </div>
                            <div id='content'>
                                <h3>Education</h3>
                                <h5>M.sc Data Science & Business Analytics</h5>
                                <p>Vels University</p>
                                <h5>BCA Computer Application </h5>
                                <p>University of Madras</p>
                            </div>
                        </div>
                        <div id='card' data-aos="fade-down" data-aos-delay="900" data-aos-easing="ease-in-out">
                                <div id='icon'>
                                    <SlBadge />
                                </div>
                                <div id='content'>
                                    <h3>Internship</h3>
                                    <h5>Python Intern</h5>
                                    <p>Shiash Info Solutions</p>
                                    <h5>Machine Learning</h5>
                                    <p>Cluster Wings Technologies</p>
                                </div>
                            
                        </div>
                        {/* <div id='card' data-aos="fade" data-aos-delay="400" data-aos-easing="ease-in-out">
                        <div id='flx'>
                                <div id='icon'>
                                    <HiCheckBadge />
                                </div>
                                <div id='content'>
                                    <h3>Projects</h3>
                                    <h5>M.sc Data Science & Business Analytics</h5>
                                    <p>Vels University</p>
                                    <h5>BCA Computer Application </h5>
                                    <p>University of Madras</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;