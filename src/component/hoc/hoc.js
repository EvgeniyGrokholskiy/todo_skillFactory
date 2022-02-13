import React, {useState} from 'react';
import InputGroup from "../inputgroup/InputGroup";

const Hoc = (Component, requiredKeys=['first_name','second_name', 'email']) => {

    return (function HHoc() {

        const [error, setError] = useState(false)
        const [state, setState] = useState({})

        const onClick = () => {
            const isError = requiredKeys.some((key) => {
                return !state[key]
            })
            setError(isError)
        }

        const onChange = (event) => {
            const letter = event.target.value
            setState({
                ...state, [event.target.name]: letter
            })
        }

        return (
            <>
                <Component onClick={()=>{onClick()}} onChange={(event)=>{onChange(event)}}/>
                {
                    error ? <h1>Error</h1> : null
                }
            </>
        )
    })
};

const WithRequiredName = Hoc(InputGroup,['first_name'])

export default WithRequiredName;