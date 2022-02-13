import React from 'react';

const InputGroup = ({onClick, onChange}) => {
    return (

        <>
            <input onChange={onChange} name={'first_name'} type={'text'}/>
            <input onChange={onChange} name={'second_name'} type={'text'}/>
            <input onChange={onChange} name={'email'} type={'email'}/>
            <button onClick={onClick}>Send</button>
        </>

    );
};

export default InputGroup;