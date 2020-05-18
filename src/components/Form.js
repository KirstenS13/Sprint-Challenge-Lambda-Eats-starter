//import React and useState
import React, { useState } from 'react';

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

    //function to set the state when the input changes
    const inputChanges = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
        console.log(formState);
    };

    //function to submit the form and create post request
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Ordered!!!');
        console.log(formState)
    };

    //the actual form goes in the return statement
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>
                Name:
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Enter your name...'
                    value={formState.name}
                    onChange={inputChanges}
                />
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
            </label>
            <label htmlFor='cheese'>
                Mozzarella Cheese
                <input 
                    type='checkbox' 
                    name='cheese' 
                    id='cheese'
                    checked={formState.cheese}
                    onChange={inputChanges}
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
            <button>Add to Order</button>
        </form>
    );
};

export default Form;