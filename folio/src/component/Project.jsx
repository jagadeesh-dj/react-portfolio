import '../index.css';
import chatbot from '../image/chatbot.webp';
import task from '../image/task.jpg';
import ocr from '../image/ocr.jpeg';
import jwt from '../image/auth.jpg';
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
                    <div id='pro-card' className='tak'>
                        <div id='cards' data-aos="fade" data-aos-delay="100" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatbot} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <small>Chatbot </small>
                                <Link to='https://github.com/jagadeesh-dj/chatbot-'><FaExternalLinkAlt /></Link>
                            </div>
                          
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="200" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={task} alt="" />
                            </div>
                            <div id='body'>
                                <small>Task Management </small>
                                <Link to='https://github.com/jagadeesh-dj/quest-tracker'><FaExternalLinkAlt /></Link>                           
                            </div>
                       
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="300" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatappdj} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <small>Responsive Chatapp</small>
                                <Link to='https://github.com/jagadeesh-dj/chat_app'><FaExternalLinkAlt /></Link>                           
                            </div>
                        
                        </div>
                    </div>
                    <div id='pro-card'>
                        <div id='cards' data-aos="fade" data-aos-delay="400" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={ocr} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <small>OCR System</small>
                                <Link to='https://github.com/jagadeesh-dj/OCR_PRO'><FaExternalLinkAlt /></Link>                           
                            </div>
                          
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="500" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={chatapprj} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <small>React Based Chatapp</small>
                                <Link to='https://github.com/jagadeesh-dj/React-django-jwt-chatapp' ><FaExternalLinkAlt /></Link>                           
                            </div>
                          
                        </div>
                        <div id='cards' data-aos="fade" data-aos-delay="600" data-aos-easing="ease-in-out">
                            <div id='head'>
                                <img src={jwt} alt="" width={180} height={130} />
                            </div>
                            <div id='body'>
                                <small>JWT Authentication</small>
                                <Link to='https://github.com/jagadeesh-dj/JWT-Auth'><FaExternalLinkAlt /></Link>                           
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project;