import React from 'react';
 
const validation = (props)=> {
    let validationMessage = <p>Text Long enough</p>;
    if(props.inputLength <= 5){
        validationMessage = <p>Text Too short!</p>;
    }
    return(
        <div>
            <p>{validationMessage}</p>
            
        </div>
    );
};
export default validation;