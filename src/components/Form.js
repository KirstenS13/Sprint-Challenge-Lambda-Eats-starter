//import React
import React from 'react';

function Form() {
    //state and functions go out here

    //the actual form goes in the return statement
    return (
        <form>
            <label htmlFor='name'>
                <input type='text' name='name' id='name' placeholder='Enter your name...'/>
            </label>
            <label htmlFor='size'>
                <select id='size'>
                    <options value=''>Select a size...</options>
                    <options value='small'>Small</options>
                    <options value='medium'>Medium</options>
                    <options value='large'>Large</options>
                    <options value='xlarge'>Extra Large</options>
                </select>
            </label>
        </form>
    );
};

export default Form;