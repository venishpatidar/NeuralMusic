import React from 'react'
import { BackArrow, Circle, Container, QuestionMark } from './CircularButtonComponent'



const CircularButton = (props) => {
    const {
        backArrow=false,
        questionMark=false,
        to="/home"
    } = props
    return (
        <Container>
            <Circle to={to}>
                {backArrow?
                    <BackArrow />
                    :
                    null
                }

                {questionMark?
                    <QuestionMark />
                    :
                    null
                }

            </Circle>
        </Container>
    )
}

export default CircularButton
