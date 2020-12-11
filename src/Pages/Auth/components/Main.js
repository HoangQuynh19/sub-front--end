import React, { useEffect, useRef, useState } from 'react';

// Material UI Style
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

// Material UI Components
import Container from '@material-ui/core/Container';
import AuthInput, { ValidateTextField } from './AuthInput';
import { validateAuthForm } from './validates';




const INPUT_FIELDS = ['firstName', 'lastName', 'email', 'password']

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


export default function AuthForm() {
    const validable = useRef(false)
    const forceValidInput = {}
    forceValidInput[INPUT_FIELDS[0]] = useRef({ checkFunc: null, isval: false, showError: null, setHelperText: null })
    forceValidInput[INPUT_FIELDS[1]] = useRef({ checkFunc: null, isval: false, showError: null, setHelperText: null })
    forceValidInput[INPUT_FIELDS[2]] = useRef({ checkFunc: null, isval: false, showError: null, setHelperText: null })
    forceValidInput[INPUT_FIELDS[3]] = useRef({ checkFunc: null, isval: false, showError: null, setHelperText: null })

    const isErrorShowable = () => validable.current;
    return (
        <Container component="main" maxWidth="xs" style={{margin:"auto"}}>

                <Grid container spacing={2}>
                    {
                        INPUT_FIELDS.map(v => (
                            <Grid item xs={6} key={v}>
                                <ValidateTextField label={labelNameMap[v]} name={v} variant="outlined" validator={validateAuthForm} isErrorShowable={isErrorShowable} forceCheckRef={forceValidInput[v]} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Button onClick={e => { validable.current = true; INPUT_FIELDS.map(v => forceValidInput[v].current.checkFunc()) }}>Check</Button>
        </Container >
    );
}