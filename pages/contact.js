import React, { useState } from "react";
//import react icons
import {
  BsTelephoneOutboundFill
} from "react-icons/bs";
import {
  MdEmail
} from "react-icons/md";


const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    message: "",
  });


  //handleChage function 
  const handleChange = (e) => {
    setFormValues((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if input value is valid or not
   if(formValues.firstName, formValues.email, formValues.message){
    alert('Message Sent!')
    // set values back to default empty string
    setFormValues({firstName: "",  email: "", message: ""})
   }else{
    alert("Invalid Credentials!")
   }
  };

  // styles
  const texteara = {
    fontSize: '0.95rem',
    backgroundColor: 'white',
    padding: '24px',
    outline: 'none',
    border: 'none',
    color: '#1d1c1c',
    borderRadius: '4px',
    width: '450px',
    '::placeholder': {
      color: '#1d1c1c',
      letterSpacing: '1px',
    }
  }

  const submitDiv = {
    marginTop: '1rem'
  }

  const submitBtn = {
    marginTop: '1rem',
    outline: 'none',
    backgroundColor: 'seagreen',
    border: 'none',
    borderRadius: '4px',
    color: 'whitesmoke',
    padding: '12px 12px',
    textAlign: 'center',
    fontSize: '1rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '450px',
  }

  const iconsStyle = {
    color: '#202A44',
    fontSize: '1rem'
  }


  return (
    <>
      <div className="contact-section">
        <h1 className="contact-heading">Get In Touch</h1>
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-icons-container">
              <div>
                <BsTelephoneOutboundFill style={iconsStyle} /> +27 67 782 7144
              </div>
              <div className="email-wrapper">
                <MdEmail  style={iconsStyle} /> aphilentando55@gmail.com
              </div>    
            </div>
            <form onSubmit={handleSubmit}>

              <div className="name-input-div">
                <input
                  type="text"
                  className="input-val"
                  name="firstName"
                  onChange={handleChange}
                  value={formValues.firstName}
                  placeholder="NAME"
                />
              </div>

              <div className="email-input-div">
                <input
                  type="email"
                  className="input-val"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  placeholder="EMAIL"
                />
              </div>

              <div className="message-input-div">
                <textarea
                  style={texteara}
                  name="message"
                  onChange={handleChange}
                  value={formValues.message}
                  placeholder="MESSAGE"
                />
              </div>

              <div style={submitDiv}>
                <button style={submitBtn}>Send Message</button>
              </div>
            </form>
          </div>
        </div>

        {/* jsx style */}
        <style jsx>
          {`
            .contact-section {
              padding: 70px 0;
            }

            .contact-heading{
              text-align: center;
              color: #01060F;
            }

            .contact-icons-container{
              position: relative;
              right: 200px;
              top: 50px;
            }

            .email-wrapper{
              position: relative;
              top: 20px
            }

            .contact-container{
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .contact-wrapper{
              padding: 16px;
              display: flex;
              justify-content: space-between;
            }

            .name-input-div, .email-input-div, .message-input-div {
              margin-top: 1.25rem;
            }

            .input-val{
              font-size: 0.95rem;
              background-color: white;
              padding: 12px;
              outline: none;
              border: none;
              color: #1d1c1c;
              border-radius: 4px;
              width: 450px;
              ::placeholder {
              color: #1d1c1c;
              letter-spacing: 1px;
              }
            }
         `}
        </style>
      </div>


    </>

  )
}

export default Contact