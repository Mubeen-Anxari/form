"use client"
import Image from 'next/image'
import Displaydata from './components/displaydata/displaydata'
import { useState } from 'react'
import { contactTypes, onChangeEventType } from '@/types/componentstypes'
import { contactInfoTypes } from '@/types/componentstypes'

export default function Home() {
const onChangeHandler=(event:onChangeEventType)=>{
console.log("onChangeHenadler",event.target.value)
console.log("onChangeHenadler",event.target.name)
let userDetails={
  ...contactInfo,
  [event.target.name]:event.target.value
}
setContactInfo(userDetails)
}
















const [contactInfo, setContactInfo]=useState<contactTypes>({
  name:"",
  email:"",
  Phone:0
})

  // var userName:string="default"
  const [userName, setUserName]=useState<string>("")
  const [email, setEmail]=useState<string>("")
  const getUserNameHandler =(event:onChangeEventType)=>{
    // console.log("getUserNameHandler",event.target.value)
    // userName=event.target.value
    setUserName(event.target.value)
  }
const getUserEmailHandler=(event:onChangeEventType)=>{
setEmail(event.target.value)
}
console.log("setContactinfo",setContactInfo)
  return (
   <div>
    <h1>Contact</h1>
     <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-600">
        Name
      </label>
      <input onChange={onChangeHandler} type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" />

      <label htmlFor="email" className="block mt-4 mb-2 text-sm font-semibold text-gray-600">
        Email
      </label>
      <input onChange={onChangeHandler} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
      <label htmlFor="email" className="block mt-4 mb-2 text-sm font-semibold text-gray-600">
        phone
      </label>
      <input onChange={onChangeHandler} type="number" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md" />
      <label htmlFor="message" className="block mt-4 mb-2 text-sm font-semibold text-gray-600">
        Message
      </label>
      <textarea id="message" name="message"  className="w-full px-3 py-2 border rounded-md"></textarea>

      <button  type="submit" className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-md">
        Submit
      </button>
      <Displaydata contactInfo={contactInfo}
 />
    </form>
   </div>
  )
}
