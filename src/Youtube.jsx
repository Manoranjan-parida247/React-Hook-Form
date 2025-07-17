import React from 'react'
import { useForm } from 'react-hook-form'

const Youtube = () => {
    const form = useForm();
    console.log(form)
    const {register} = form;
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form>
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
        </div>
    )
}

export default Youtube