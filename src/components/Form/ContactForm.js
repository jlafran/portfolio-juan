import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import emailjs from 'emailjs-com';
import styles from './form.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ujkfx7z', 'template_1aixpkx', values, '9NXQflqusnuXYNb0P')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
    <div className="borde">
      {status && renderAlert()}
      <form className="body-form center"onSubmit={handleSubmit}>
        <h3 className="title-form bold font-color center-text padding-bottom2">Let's chat together</h3>
        <InputField value={values.fullName} handleChange={handleChange} padding="padding-bottom" style="small"label="My name is" name="fullName" type="text" placeholder=" " />
        <InputField value={values.email} handleChange={handleChange} padding="padding-bottom2" style="big" label="You can contact me at" name="email" type="email" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @  " />
        <TextareaField value={values.message} handleChange={handleChange} label="I'd like to talk about" name="message" placeholder=" " />
        <button type="submit" className="send-form-boton font-color bold "> Send </button>
      </form>
    </div>
    </>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message submitted successfully</p>
  </div>
)

export default ContactForm
