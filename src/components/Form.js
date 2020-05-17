//import React and useState
import React, { useState } from 'react';

function Form() {
    //state and functions go out here

    //state for the Form
    const [formState, setFormState] = useState({
        name: null,
        size: null,
        cheese: false,
        ham: false,
        olives: false,
        pineapple: false,
        instructions: null
    });

    //function to set the state when the input changes
    const inputChanges = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
        console.log(formState);
    };

    //the actual form goes in the return statement
    return (
        <form>
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
            <label htmlFor='size'>
                Pizza Size:
                <select value={formState.size} name='size' id='size'>
                    <options value=''>Select a size...</options>
                    <options value='small'>Small</options>
                    <options value='medium'>Medium</options>
                    <options value='large'>Large</options>
                    <options value='xlarge'>Extra Large</options>
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
        </form>
    );
};

export default Form;