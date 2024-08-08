import '../index.css';
import chatbot from '../image/chatbot.webp';
import task from '../image/task.webp';
import ocr from '../image/ocr.jpeg';
import jwt from '../image/jwt.webp';
import chatappdj from '../image/chatappdj.jpg'
import chatapprj from '../image/chatapprj.jpeg'
import { Link } from 'react-router-dom';

import { FaExternalLinkAlt } from "react-icons/fa";


function Project(){
    return (
        <section id="project">
            <div className='page4'>
                <div id='title'>
                    <h1>Projects</h1>
                </div>
                <div id='content3'>
                    <div id='pro-card'>
                        <div id='cards' data-aos="fade" data-aos-delay="100" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatbot} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <p>Chatbot </p>
                                <Link><FaExternalLinkAlt /></Link>
                            </div>
                            {/* <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="200" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={task} alt="" />
                            </div>
                            {/* <div id='body'>
                                <small>Chatbot using NLP and Neural Networks</small>
                            </div> */}
                            {/* <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="300" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatappdj} alt="" width={180} height={130} />
                            </div>
                            {/* <div id='body'>
                                <small>Chatbot using NLP and Neural Networks</small>
                            </div>
                            <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                    </div>
                    <div id='pro-card'>
                        <div id='cards' data-aos="fade" data-aos-delay="400" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={ocr} alt="" width={180} height={130} />
                            </div>
                            {/* <div id='body'>
                                <small>Chatbot using NLP and Neural Networks</small>
                            </div>
                            <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="500" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatapprj} alt="" width={180} height={130} />
                            </div>
                            {/* <div id='body'>
                                <small>Chatbot using NLP and Neural Networks</small>
                            </div>
                            <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="600" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={jwt} alt="" width={180} height={130} />
                            </div>
                            {/* <div id='body'>
                                <small>Chatbot using NLP and Neural Networks</small>
                            </div>
                            <div id='footer'>
                                <Link id='git'>Github</Link>
                                <Link id='liv'>Live</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project;