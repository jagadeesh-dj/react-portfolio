import '../index.css'



function Contact(){
    return (
        <section id="contact">
            <div className='page5'>
                <div id='title'>
                    <h1>Contact Me</h1>
                </div>
                <div id='content4'>
                    <div id='myform'>
                        <form action="">
                            <div id='fullname' data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out">
                                <input type="text" placeholder='FullName'/>
                            </div>
                            <div id='mail' data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out">
                                <input type="mail" placeholder='Email Address'/>
                            </div>
                            <div id='message' data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in-out">
                                <textarea name="message" id="message" cols="37" rows="10" placeholder='Enter Your Message'></textarea>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="600" data-aos-easing="ease-in-out"> 
                                <button id='sendbtn'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;