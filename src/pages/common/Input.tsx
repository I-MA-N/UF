import { ReactNode, useState } from "react"
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form"

type LoginInputPropTypes = {
    name: string,
    text: string,
    placeholder: string,
    register: UseFormRegister<FieldValues>
    registerOptions?: RegisterOptions,
    direction: "ltr" | "rtl",
    isNumberType?: boolean,
    defaultValue?: string,
    render?: () => ReactNode,
    divClassName?: string,
    isDisabled?: boolean
}


function Input({ 
    name, text, placeholder, register, registerOptions, direction, isNumberType, defaultValue, render, 
    divClassName, isDisabled
}: LoginInputPropTypes) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`flex flex-col ${divClassName || ''}`}>
            <label htmlFor={name} className={`mr-5 text-sm ${isDisabled && 'text-white/50'}`}>{text}</label>
            {
                name === 'password' || name === 'confirmpass' || name === 'oldpassword' || name === 'newpassword'
                    ?
                    <div className="relative">
                        <input
                            dir="ltr"
                            className={`custom-input placeholder:text-start ${isDisabled && 'border-white/50 text-white/50'}`}
                            type={showPassword ? 'text' : 'password'}
                            id={name}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            {...register(name, registerOptions)}
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-4"
                            onClick={() => setShowPassword(prevValue => !prevValue)}
                        >
                            {
                                showPassword ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                        <path d="M8 7C10.3333 9.33333 13.6667 9.33333 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.65162 7.44478C3.37 9.39221 7.2293 13 12 13C16.7707 13 20.63 9.39221 22.3484 7.44478C22.5802 7.18202 22.5802 6.81798 22.3484 6.55522C20.63 4.60779 16.7707 1 12 1C7.2293 1 3.37 4.60779 1.65162 6.55522C1.41976 6.81798 1.41976 7.18202 1.65162 7.44478Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                        <path d="M1.65162 6.55522C1.41976 6.81798 1.41976 7.18202 1.65162 7.44478C3.37 9.39221 7.2293 13 12 13C16.7707 13 20.63 9.39221 22.3484 7.44478C22.5802 7.18202 22.5802 6.81798 22.3484 6.55522C20.63 4.60779 16.7707 1 12 1C7.2293 1 3.37 4.60779 1.65162 6.55522Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="3" cy="3" r="2" transform="matrix(-1 0 0 1 15 4)" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                            }
                        </button>
                    </div>
                    :
                    <input
                        dir={direction}
                        className={`custom-input ${direction === "ltr" && "placeholder:text-end"} ${isDisabled && 'border-white/50 text-white/50'}`}
                        type={isNumberType ? "number" : "text"}
                        id={name}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        {...register(name, registerOptions)}
                    />
            }
            {render && render()}
        </div>
    )
}

export default Input