import React from 'react'
import { StyledButton } from './ButtonComponent'

const Button = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default Button
