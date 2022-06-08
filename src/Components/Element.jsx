import React, {useCallback} from 'react';
import '../styles/testStyle.css';


const Element = (props) => {

    return (
        <label>
            <input onChange={()=>props.onSelect(props.text)} type={'checkbox'}/>
            {props.text}
        </label>
    );
};

export default Element;