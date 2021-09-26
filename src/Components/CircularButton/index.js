import React from 'react'
import { BackArrow, Circle, Container, QuestionMark } from './CircularButtonComponent'



const CircularButton = (props) => {
    const {
        backArrow=false,
        questionMark=false,
    } = props
    return (
        <Container>
            <Circle>
                {backArrow?
                    <BackArrow/>
                    :
                    null
                }

                {questionMark?
                    <QuestionMark/>
                    :
                    null
                }

            </Circle>
        </Container>
    )
}

export default CircularButton
