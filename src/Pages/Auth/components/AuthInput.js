import React, { useEffect, useRef, useState } from 'react'
import { TextField } from '@material-ui/core'


const autoCompleteNameMap = {
    firstName: 'fname',
    lastName: 'lname',
    email: 'email',
    password: 'password'
}

const labelNameMap = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    password: 'Password'
}

const typeNameMap = {
    firstName: 'text',
    lastName: 'text',
    email: 'email',
    password: 'password'
}

const textFieldProps = (name) => ({
    variant: "outlined",
    name,
    id: name,
    required: true,
    fullWidth: true,
    label: labelNameMap[name],
    type: typeNameMap[name],
    autoComplete: autoCompleteNameMap[name]
})

export default function AuthInput(props) {
    const { name, error, helperText, checkInput, inref, ...others } = props
    return (
        <TextField
            {...textFieldProps(name)}
            error={error}
            helperText={error ? helperText : ''}
            // onBlur={e => showError(e.target.name)}
            onChange={e => checkInput(e.target.value, e.target.name)}
            inputRef={input => (
                inref[name] = input
            )}
            {...others}
        />
    )
}

export const ValidateTextField = (props) => {
    const {validator, name, isErrorShowable, forceCheckRef, ...others} = props;
    if (others.error == undefined){
        others.error = false
    }
    const inputRef = useRef();
    const [error, showError] = useState(others.error)
    const [helperText, setHelperText] = useState()
    delete others['error']
    const watcher = (value) =>{
        const [iserr, htext] = validator(value, name);
        forceCheckRef.current.isval = !iserr;
        if(iserr && isErrorShowable()){
            showError(true);
            setHelperText(htext);
        } else if(!iserr) {
            showError(false);
            setHelperText(htext);
        }
    }

    useEffect(() => {
        forceCheckRef.current.checkFunc = () => watcher(inputRef.current.value)
        forceCheckRef.current.showError = showError;
        forceCheckRef.current.setHelperText = setHelperText;
    }, [])

    return (
        <TextField {...others} error={error} helperText={helperText} inputRef={inputRef} onChange={e => watcher(e.target.value)}/>
    ) 
}