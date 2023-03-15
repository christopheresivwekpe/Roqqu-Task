import React from 'react';
import PageOne from './page1';
import Logo from "../../../assets/roqqu_img.svg"

function SignUpPage() {
  return (
    <div className='w-full flex justify-center items-center'>
        <section className='w-[488px]'>
          <img src={Logo} className="py-[64px]" />

          <h2 className='text-[32px] font-semibold text-white'>
            Hey 👋🏽<br />
            welcome to Roqqu
          </h2>

          <div className='mb-[28px] text-[16px] font-semibold text-[#A7B1BC]'>
              Let’s get to know you!
              We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜
          </div>
          <PageOne /> 
        </section>
    </div>
  )
}

export default SignUpPage