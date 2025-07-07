import React from 'react'
import { useState } from 'react'
import TitleHeader from '../component/TitleHeader'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setResult("Sending....");

    formData.append("access_key", "d70037c9-6d68-40c9-9e07-c9e515163a70");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Email sent successfully!");
      setTimeout(() => {
        setResult("");
      }, 4000);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };



  return (
    <div className='mb-15' id='contact'>
    <form onSubmit={onSubmit}>
        <div className="container mt-6   flex flex-col gap-5 justify-center items-center">
            <TitleHeader title="Contact Me" sub="Get In Touch" />
            <div className="form mt-4 w-full md:w-1/2 flex flex-col gap-3  justify-center items-center bg-amber-50 p-5 rounded-2xl">
                <div className='mb-3 w-100% flex justify-center items-center md:flex-row flex-col'><label className=' text-black'>Name  </label><input className='' type="text" placeholder='Name' name='name' /></div>
                <div className='mb-3 w-100% flex justify-center items-center md:flex-row flex-col'><label className=' text-black'>Email  </label><input type="email" placeholder='Email' name='email'/></div>
                <div className='mb-3 w-100% flex justify-center items-center md:flex-row flex-col'><label className=' text-black'>Message  </label><textarea type="text" placeholder='Your Message' name='message' /></div>

                <button className='rounded-2xl bg-black text-white p-2 w-1/5' type="submit" > Send </button>
            </div>
        </div>
        
    </form>
    <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>
        {result}
    </p>

    </div>

  )
}

export default Contact