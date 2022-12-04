import React from 'react'
import { CanvasDiv } from './CanvasComponent'

const Canvas = (props) => {
    return (
        <CanvasDiv>
            {props.children}
        </CanvasDiv>
    )
}

export default Canvas
