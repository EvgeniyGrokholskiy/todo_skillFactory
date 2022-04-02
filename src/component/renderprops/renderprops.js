import React, {useState} from 'react';
import InputGroup from "../inputgroup/InputGroup";

const Render =(props) => {

    const [error, setError] = useState(false)
    const [state, setState] = useState({})

    const onClick = () => {
        const isError = ['first_name','second_name', 'email'].some((key) => {
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


    return(
        <>
            {props.render({error , onChange, onClick})}
        </>
    )

}

const RenderProps = () => {
    return (
        <div>
            <Render render={({error, onChange, onClick})=>{
                return <>
                    <InputGroup onChange={onChange} onClick={onClick}/>
                    {
                        error ? <h1>error</h1> : null
                    }
                </>
            }}/>
        </div>
    );
};

export default RenderProps;