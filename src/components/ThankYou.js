import React from 'react'
import Button from "react-bootstrap/cjs/Button";


const ThankYou = ({showThankYou, setShowFindForm, setShowThankYou}) => {
    const click = e => {
        e.preventDefault()
        setShowThankYou(true)
        setShowFindForm(false)
    }
    return (
        <div hidden={showThankYou} className={'container typ-container'}>
            <form onSubmit={click}>
                <div className='typ-content'>
                    <h3>Your message has been sent successfully</h3>
                    <h5>If you wish to email another representative or you wish to send another email to the same
                        representative Click Repeat Button.</h5>
                    <Button
                        type={'submit'}
                        onClick={click}
                        variant={'dark'}>
                        RepeatProcess
                    </Button>
                </div>
            </form>
        </div>


    )
}

export default ThankYou;