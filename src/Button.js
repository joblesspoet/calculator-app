import React from 'react'

function Button(props) {
    return (
        <div>
            <button className={props.class} onClick={() => props.handleClick(
                {name: props.name, value: props.children}
            )}>
                {props.children}
            </button>
        </div>
    )
}

export default Button
