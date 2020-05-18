//import React and useState
import React, { useState } from 'react';
//import axios
import axios from 'axios';
//import yup
import * as yup from 'yup';
//import styled-components
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
`


//schema for our form
let schema = yup.object().shape({
    name: yup.string().min(2, 'Name must be at least 2 characters').required('Please enter your name'),
    size: yup.string().required('Please choose a size'),
    cheese: yup.boolean(),
    ham: yup.boolean(),
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string()
});

function Form() {
    //state and functions go out here

    //state for the Form
    const [formState, setFormState] = useState({
        name: '',
        size: '',
        cheese: false,
        ham: false,
        olives: false,
        pineapple: false,
        instructions: ''
    });

    //state for errors
    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
        cheese: '',
        ham: '',
        olives: '',
        pineapple: '',
        instructions: ''
    });

    //state for returned data from server
    const [orders, setOrders] = useState([]);

    //function to validate form
    const validateForm = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        yup
            .reach(schema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({ ...errorState, [e.target.name]: '' });
            })
            .catch(err => {
                setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
            })
    };

    //function to set the state when the input changes
    const inputChanges = (e) => {
        e.persist();
        validateForm(e);
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
        console.log(formState);
    };

    //function to submit the form and create post request
    const submitForm = (e) => {
        //stop page reload
        e.preventDefault();
        console.log('Ordered!!!');
        //send data to api
        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {
                console.log(response);
                //set state for response
                setOrders([ ...orders, response ]);
                console.log(orders);
            })
            .catch(err => {
                console.log(err);
            })
        //clear the form
        setFormState({
            name: '',
            size: '',
            cheese: false,
            ham: false,
            olives: false,
            pineapple: false,
            instructions: ''
        })
    };

    //the actual form goes in the return statement
    return (
        <StyledForm onSubmit={submitForm}>
            <label htmlFor='name'>
                Name:
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Enter your name...'
                    value={formState.name}
                    onChange={inputChanges}
                    data-cy='name'
                />
                {errorState.name.length > 0 ? (<p>{errorState.name}</p>) : null}
            </label>
            <label htmlFor='sizes'>
                Pizza Size:
                <select 
                    value={formState.size} 
                    name='size' 
                    id='sizes'
                    onChange={inputChanges}
                >
                    <option value=''>Select a size...</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xlarge'>Extra Large</option>
                </select>
                {errorState.size.length > 0 ? (<p>{errorState.size}</p>) : null}
            </label>
            <p>Choose your toppings:</p>
            <label htmlFor='cheese'>
                Mozzarella Cheese
                <input 
                    type='checkbox' 
                    name='cheese' 
                    id='cheese'
                    checked={formState.cheese}
                    onChange={inputChanges}
                    data-cy='cheese'
                />
            </label>
            <label htmlFor='ham'>
                Ham
                <input 
                    type='checkbox' 
                    name='ham' 
                    id='ham'
                    checked={formState.ham}
                    onChange={inputChanges}
                />
            </label>
            <label htmlFor='olives'>
                Black Olives
                <input 
                    type='checkbox' 
                    name='olives' 
                    id='olives'
                    checked={formState.olives}
                    onChange={inputChanges}
                    data-cy='olives'
                />
            </label>
            <label htmlFor='pineapple'>
                Pineapple
                <input 
                    type='checkbox' 
                    name='pineapple' 
                    id='pineapple'
                    checked={formState.pineapple}
                    onChange={inputChanges}
                />
            </label>
            <label htmlFor='instructions'>
                <textarea 
                    id='instructions' 
                    name='instructions'
                    value={formState.instructions}
                    onChange={inputChanges}
                />
            </label>
            <button data-cy='submit'>Add to Order</button>
        </StyledForm>
    );
};

export default Form;