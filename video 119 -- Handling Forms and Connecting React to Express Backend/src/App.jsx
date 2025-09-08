import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2)  // Simulating network delay

    let r = await fetch("http://localhost:3000/",  {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
    let res = await r.text()
    
    console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "sorry this user is blocked"})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading....</div>}
      <div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <input {...register("username", {required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min length is 3"}, maxLength: {value: 8, message: "Min length is 8"}})} type="text" placeholder='username' />
            {errors.username && <div className='red'>{errors.username.message}</div>}
            <br />
            <input {...register("password", {required: {value: true, message: "This field is required"}, minLength: {value: 7, message: "Min length of password is 7"}})} type="password" placeholder='password' />
            {errors.password && <div className='red'>{errors.password.message}</div>}
            <br />
            <input disabled={isSubmitting}  type="submit" value="submit" />
            {errors.myform && <div className='red'>{errors.myform.message}</div>}
            {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
