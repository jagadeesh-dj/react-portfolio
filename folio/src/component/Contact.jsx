import '../index.css'
import { useState } from 'react';
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';

function Contact(){
    const [inputs,setinputs]=useState({name:"",email:"",message:""})




    const FormEvent=(event)=>{
        const {name,value}=event.target
        setinputs((item)=>({...item,[name]:value}))
        
    }

    const service_id = 'service_ufu790b' 
    const user_id='7mzhs_KiVu3Apu0eO'
    const template_id='template_vhzzrp6'
    const template_parameter={name:inputs.name,email:inputs.email,message:inputs.message}
    const Myform=(e)=>{
        e.preventDefault()
        emailjs.send(service_id,template_id,template_parameter,user_id)
        .then(response=>{
            if(response.status===200){
          
                toast(`Mail Sent Successfully`);

            }
        })
        .catch(error=>{
            toast('unable to sent the mail')
        })
        setinputs({
            name:'',
            email:'',
            message:''
        })
    }
    return (
        <section id="contact">
            <div className='page5'>
                <div id='title'>
                    <h1>Contact Me</h1>
                </div>
            
                <div id='indicator'>
                    <Toaster />
                </div> 
                
                <div id='content4'>
                    <div id='myform'>
                        <form action="" onSubmit={Myform}>
                            <div id='fullname' data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out">
                                <input type="text" name="name" value={inputs.name} onChange={FormEvent} placeholder='FullName' required/>
                            </div>
                            <div id='mail' data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out">
                                <input type="mail" name="email" placeholder='Email Address' value={inputs.email} onChange={FormEvent} required/>
                            </div>
                            <div id='message' data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in-out">
                                <textarea name="message" id="message" cols="37" rows="10" placeholder='Enter Your Message' value={inputs.message} onChange={FormEvent} required></textarea>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="600" data-aos-easing="ease-in-out"> 
                                <button id='sendbtn' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;