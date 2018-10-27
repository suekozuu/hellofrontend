import React from 'react' ;

const Beaver = (props)=> (
    // {props.bottonName}
    <span>
        <img src = './images/beaverpic.png' height="100" />
        <button>{props.buttonName}</button>
    </span>
)

export default Beaver