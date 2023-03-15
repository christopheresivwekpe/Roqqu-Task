import React, { useState } from 'react';
import UserIcon from "../../../assets/userIcon.svg"

function PageOne() {

  const [username, setUserName] = useState("");
  return (
    <div className='w-full'>
      <label 
      className='text-[12px] mb-[15px] font-semibold text-[#A7B1BC]'
      htmlFor='userName'>
        Username
      </label>

      <div
      className='h-[54px] flex space-x-[7px] w-full px-[16px] bg-[#20252B] rounded-[7px] border border-white'>
        <img src={UserIcon} height="17px" width="17px" />
        <input 
          type='text'
          name='username'
          id="userName"
          // value={username}
          className="border-none w-full outline-none bg-[#20252B] text-[14px] text-white"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className='ml-[12px] mt-[12px] w-full flex item-center space-x-[10px]'>
        <input 
          type='checkbox'
          className='bg-[#20252B] border border-[#A7B1BC] w-[15px] h-[15px]'
        />
        <label className='text-[14px] text-white font-semibold'>
          I agree to Roqqu's &#160;
          <a className='text-[#A0D2FE]'>
            Terms & conditions and privacy policy
          </a>
        </label>
      </div>
    </div>
  )
}

export default  PageOne