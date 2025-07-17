import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
const Youtube = () => {
    const form = useForm();
    console.log(form)
    console.log("rendered")
    const {register, control, handleSubmit} = form;

    // define a function which should be called when submit button is pressed
    //destructre the function handleSubmit
    //add onSubmit to form 
    const handleFormSubmit = (data)=>{
        console.log("form submitted", data)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div style={{margin:"20px"}}>
                    <label htmlFor='username'>username : </label>
                    <input type='text' id='username' {...register("username")} />
                </div>
                <div style={{margin:"20px"}}>
                    <label htmlFor='email'>email : </label>
                    <input type='email' id='email' {...register("email")}  />
                </div>
                <div style={{margin:"20px"}}>
                    <label htmlFor='channel'>channel : </label>
                    <input type='text' id='channel' {...register("channel")}  />
                </div>
                <button>submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default Youtube