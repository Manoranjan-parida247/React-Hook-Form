import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
const Youtube = () => {
    const form = useForm({
        defaultValues: {
            username: "Batman",
            email: "",
            channel: "",
            social: {
                twitter: "",
                facebook: ""
            },
            phoneNumbers: ["", ""],
            skills: [{ skill: "" }]
        }
    });
    console.log(form)
    console.log("rendered")
    const { register, control, handleSubmit, formState } = form;

    const { errors } = formState

    const { fields, append, remove } = useFieldArray({
        name: "skills",
        control
    })

    // define a function which should be called when submit button is pressed
    //destructre the function handleSubmit
    //add onSubmit to form 
    const handleFormSubmit = (data) => {
        console.log("form submitted", data)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                <div style={{ margin: "20px" }}>
                    <label htmlFor='username'>username : </label>
                    <input type='text' id='username' {...register("username", {
                        required: "Username is required"
                    })} />
                    <p style={{ color: "red" }}>{errors.username?.message}</p>
                </div>
                <div style={{ margin: "20px" }}>
                    <label htmlFor='email'>email : </label>
                    <input type='email' id='email' {...register("email", {
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format"
                        },
                        // validate: (fieldValue) => {
                        //     return(fieldValue !== "admin@example.com" || "Enter disfferent email address!")
                        // }

                        validate: {
                            notAdmin: (fieldValue) => {
                                return (fieldValue !== "admin@example.com" || "Enter a disfferent email address!");
                            },
                            notBlackListed: (fieldValue) => {
                                return !fieldValue.endsWith("baddomain.com") || "This domain is not supported";
                            }
                        }
                    })} />
                    <p style={{ color: "red" }}>{errors.email?.message}</p>

                </div>
                <div style={{ margin: "20px" }}>
                    <label htmlFor='channel'>channel : </label>
                    <input type='text' id='channel' {...register("channel", {
                        required: {
                            value: true,
                            message: "username is required"
                        }
                    })} />
                    <p style={{ color: "red" }}>{errors.channel?.message}</p>

                </div>

                <div style={{ margin: "20px" }}>
                    <label htmlFor='twitter'>twitter : </label>
                    <input type='text' id='twitter' {...register("social.twitter")} />
                </div>

                <div style={{ margin: "20px" }}>
                    <label htmlFor='facebook'>facebook : </label>
                    <input type='text' id='facebook' {...register("social.facebook")} />
                </div>

                <div style={{ margin: "20px" }}>
                    <label htmlFor='primary-phone'>Primary phone number : </label>
                    <input type='text' id='primary-phone' {...register("phoneNumbers.0")} />
                </div>
                <div style={{ margin: "20px" }}>
                    <label htmlFor='secondary-phone'>Secondary phone number : </label>
                    <input type='text' id='secondary-phone' {...register("phoneNumbers.1")} />
                </div>
                <div>
                    <label>List of skills</label>
                    <div>
                        {
                            fields.map((field, index) => {
                                return (
                                    <div key={field.id}>
                                        <input type='text' {...register(`skills.${index}.skill`)} />
                                        {
                                            index > 0 && (
                                                <button type='button' onClick={()=> remove(index)}>remove</button>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }

                        <button type='button'  onClick={() => append({skill: ""})}>add skill</button>
                    </div>
                </div>
                <button>submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default Youtube