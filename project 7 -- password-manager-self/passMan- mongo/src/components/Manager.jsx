import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {

    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const ref = useRef()
    const passwordRef = useRef()

    const getPassword = async () => {
        let req = await fetch("http://localhost:3000/")
        let password = await req.json()
        console.log(password);

        setPasswordArray(password)

    }


    useEffect(() => {
        getPassword()
    }, [])


    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id })
            });

            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: form.id })
            });

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            setForm({ site: "", username: "", password: "" })
        }
        else {
            console.log("Atleast 4 letter required!");
        }

    }

    const showPassword = () => {

        if (ref.current.src.includes("icons/eye.png")) {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"

        }
        else {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        console.log("password copied!");
    }

    const deletePassword = async (id) => {
        let c = confirm("Are you delete this password permanently!")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
        }
    }

    const editPassword = (id) => {
        console.log("editing password with id", id);
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id != id))



    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, id: uuidv4() })
    }


    return (<>
        <div className=' min-h-[83vh]'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[#daccfe] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#daccfe] opacity-20 blur-[100px]"></div></div>

            <div className="container w-[80vw] mx-auto  ">
                <input onChange={handleChange} className='bg-purple-100 text-sm px-2 py-1 w-full my-3 rounded-md outline-purple-900 border-2 border-purple-800' type="text" value={form.site} name='site' placeholder='Enter website name' />
                <div className='flex gap-3 w-full'>
                    <input onChange={handleChange} className='bg-purple-100 text-sm px-2 py-1 w-4/2 rounded-md outline-purple-900 border-2 border-purple-800' type="text" value={form.username} name='username' placeholder='Enter your username' />

                    <div className='w-full relative'>
                        <input ref={passwordRef} onChange={handleChange} className='bg-purple-100 text-sm px-2 py-1 w-full rounded-md outline-purple-900 border-2 border-purple-800' type="password" value={form.password} name='password' placeholder='Enter your password' />
                        <span className='cursor-pointer' onClick={() => { showPassword() }}><img ref={ref} className='w-5 absolute right-2.5 bottom-1' src="icons/eye.png" alt="" /></span>
                    </div>
                </div>
                <div onClick={() => { savePassword() }} className='w-fit py-1.5 relative flex justify-center items-center my-3 mx-auto  gap-1 bg-purple-800 font-bold  px-8 rounded-full text-center text-white text-lg cursor-pointer hover:bg-purple-700'>
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                    >
                    </lord-icon>
                    <span >Save</span>
                </div>

                <div className="savepassword">
                    <div >
                        <h2 className='text-purple-950 font-bold text-lg'>Your passwords</h2>
                    </div>
                    {passwordArray.length === 0 ? <div className='flex items-center justify-center opacity-50 h-[20vh] '>No passwords to show</div> :
                        <div className='tablepass'>
                            <div className='grid grid-cols-4 text-center gap-2 bg-purple-400 py-2'>

                                <div className='font-bold text-purple-900'>site</div>
                                <div className='font-bold text-purple-900'>username</div>
                                <div className='font-bold text-purple-900'>password</div>
                                <div className='font-bold text-purple-900'>edit/delete</div>
                            </div>

                            {passwordArray.map((item, index) => {


                                return (<div key={index} className='grid grid-cols-4 text-center gap-2 bg-purple-200 py-1'>

                                    <div className=''>
                                        <span>{item.site}</span>
                                        <span onClick={() => { copyText(item.site) }} className="cursor-pointer">
                                            <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </span>
                                    </div>
                                    <div className=''>
                                        <span>{item.username}</span>
                                        <span onClick={() => { copyText(item.username) }} className="cursor-pointer">
                                            <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </span>
                                    </div>
                                    <div className=''>
                                        <span>{"*".repeat(item.password.length)}</span>
                                        <span onClick={() => { copyText(item.password) }} className="cursor-pointer">
                                            <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </span>
                                    </div>
                                    <div className=''>
                                        <span onClick={() => { editPassword(item.id) }} className="cursor-pointer">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span >
                                        <span onClick={() => { deletePassword(item.id) }} className="cursor-pointer">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default Manager

// import React from 'react'
// import { useRef, useState, useEffect } from 'react'


// import { v4 as uuidv4 } from 'uuid';

// const Manager = () => {
//     const [form, setForm] = useState({ site: "", username: "", password: "" })
//     const [passwordArray, setPasswordArray] = useState([])
//     const ref = useRef()
//     const passwordRef = useRef()

//     const getPassword = async () => {
//         let req = await fetch("http://localhost:3000/")
//         let passwords = await req.json()
//         console.log(passwords);
//         setPasswordArray(passwords)
//     }


//     useEffect(() => {
//         getPassword()


//     }, [])

//     const copyText = (text) => {
        
//         navigator.clipboard.writeText(text)
//     }


//     const showPassword = () => {
//         // passwordRef.current.type = "text"
//         if (ref.current.src.includes("icons/eyecross.png")) {
//             ref.current.src = "icons/eye.png"
//             passwordRef.current.type = "password"
//         }
//         else {
//             ref.current.src = "icons/eyecross.png"
//             passwordRef.current.type = "text"
//         }
//     }
//     const savePassword = async () => {
//         if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

//             // If any such id exists in the db, delete it
//             await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ id: form.id})})

//             setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
//             await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...form, id: uuidv4()})})
//             // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
//             setForm({ site: "", username: "", password: "" })
            
//         }
        
//     }

//     const deletePassword = async (id) => {
//         let c = confirm("Do you really want to delete this password?")
//         if (c) {
//             setPasswordArray(passwordArray.filter(item => item.id !== id))
//             let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ id})})
//             // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            
//         }
//     }

//     const editPassword = (id) => {
//         console.log("Editing password with id", id);
//         setForm({...passwordArray.filter(i => i.id === id)[0], id: id})
//         setPasswordArray(passwordArray.filter(item => item.id != id))
//         // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
//         // console.log([...passwordArray, form])
//     }

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//     }



//     return (<>
        
//         <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

//         <div className="md:w-[80vw] md:px-40 md:py-16 md:mx-auto p-3 md:p-0  min-h-[calc(100vh-105px)]">
//             <h1 className='font-bold text-4xl text-center'>
//                 <span className='text-green-500'>&lt;</span>
//                 <span>Pass</span>
//                 <span className='text-green-500'>OP/&gt;</span>
//             </h1>
//             <p className='text-green-900 text-lg text-center'>Your own password paragraph</p>

//             <div className="flex flex-col  items-center p-4 text-black gap-8">
//                 <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full  border  border-green-500 w-full p-4 py-1' type="text" name="site" id='site' />
//                 <div className="flex flex-col md:flex-row w-full gap-8">
//                     <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border  border-green-500 w-full p-4 py-1' type="text" name="username" id='usename' />

//                     <div className="relative">
//                         <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border  border-green-500 w-full p-4 py-1' type="password" name="password" id='password' />

//                         <span className="absolute right-2.5 self-center cursor-pointer" onClick={showPassword}>
//                             <img ref={ref} className='w-[27px] p-1' src="icons/eye.png" alt="" />
//                         </span>
//                     </div>
//                 </div>
//                 <button onClick={savePassword} className='flex justify-center items-center bg-green-500 gap-2 hover:bg-green-600 w-fit rounded-full px-8 py-2 border border-green-900'>

//                     <lord-icon
//                         src="https://cdn.lordicon.com/efxgwrkc.json"
//                         trigger="hover">
//                     </lord-icon>
//                     Save</button>
//             </div>

//             <div className="passwords">
//                 <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
//                 {passwordArray.length === 0 ? <div>No passwords to show</div> :
//                     <table className=" table-auto w-full rounded-md overflow-hidden mb-10">
//                         <thead className=' bg-green-700 text-white'>
//                             <tr>
//                                 <th className='py-2'>Site</th>
//                                 <th className='py-2'>Username</th>
//                                 <th className='py-2'>Password</th>
//                                 <th className='py-2'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-green-100'>
//                             {passwordArray.map((item) => {

//                                 return <tr key={item.id}>
//                                     <td className='py-2 border border-white text-center '>
//                                         <div className='flex justify-center items-center'><a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
//                                             <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
//                                                 <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='py-2 border border-white text-center '>
//                                         <div className='flex justify-center items-center '>
//                                             <span>{item.username}</span>
//                                             <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.username) }}>
//                                                 <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='py-2 border border-white text-center'>
//                                         <div className='flex justify-center items-center '><span>{"*".repeat(item.password.length)}</span>
//                                             <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.password) }}>
//                                                 <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='py-2 border border-white text-center'>
//                                         <span onClick={() => { editPassword(item.id) }} className='cursor-pointer mx-1'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/gwlusjdu.json"
//                                                 trigger="hover"
//                                                 style={{ "width": "25px", "height": "25px" }}>
//                                             </lord-icon>
//                                         </span>
//                                         <span onClick={() => { deletePassword(item.id) }} className='cursor-pointer mx-1'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/skkahier.json"
//                                                 trigger="hover"
//                                                 style={{ "width": "25px", "height": "25px" }}>
//                                             </lord-icon>
//                                         </span>
//                                     </td>
//                                 </tr>
//                             })}

//                         </tbody>
//                     </table>
//                 }
//             </div>
//         </div>


//     </>

//     )
// }

// export default Manager
