import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";


const List = ({mps, dataUser,  setEmailData,  setShowFindForm, setShowEmailForm, clientId}) => {
    const [tweet, setTweet] = useState(``)
    const fetchData = async () => {
        const requestOptions = {
            method: 'POST',
            redirect: 'follow'
        }
        const data = await fetch(`https://payload-demo-tpm.herokuapp.com/tweets/?clientId=${clientId}`, requestOptions);
        const datos = await data.json()
        console.log(datos.data, 'datos.data-tweet')
        const textoTweet = datos.data?.docs[0].Message
        setTweet(textoTweet)
    }
    
    useEffect(() => {
        fetchData()
        .catch((error)=>console.error(error))
        
        console.log(tweet, 'tweet state en useeffect')
    },[])
    const tweetText = `.${mps.twitter} ${tweet}`
    console.log(tweetText)
    const click = e => {
        e.preventDefault()
        setEmailData({
            ...dataUser,
            ...mps
        })
        setShowEmailForm(false)
        setShowFindForm(true)
    }
    return (
        <div className={'buttonsContainer'}>
            <div className={'list-content-location'}>
                <div>
                    <h3> {mps.Name} </h3>
                    <p>For: {mps.postalcode}, City: {mps.city}, -State: {mps.city}</p>
                </div>
            </div>
            <div className={'buttons'}>
                <div className='list-buttons-content'>
                    {
                        mps.twitter ?
                        <Button
                            className='list-button'
                            size={'sm'}
                            variant={'dark'}
                            href={`https://twitter.com/intent/tweet?text=${tweetText} Tweets%20are%20pre-written%20and%20can%20be%20edited%20by%20users%20before%20posting.%20Links%2C%20hashtags%2C%20and%20handles%20can%20all%20be%20included%20in%20a%20tweet.`}
                            target={"blank"}
                        >
                            SEND TWEET
                        </Button> :
                        <p className='list-notweeter-text' >No Twitter</p>
                    }
                </div>
                <div className={'container list-buttons-content'}>
                    {
                        mps.contact ?
                            <Button
                                className='list-button'
                                size={'sm'}
                                variant={'dark'}
                                target={"blank"}
                                onClick={click}
                            >
                                SEND EMAIL
                            </Button> :
                            <p>No Email</p>
                    }
                </div>
                <div className={'container list-buttons-content'}>
                    {
                        mps.phone ?
                            <Button
                                className='list-button'
                                size={'sm'}
                                variant={'dark'}
                                href={`tel:+55${mps.phone}`}
                                target={"blank"}
                            >
                                CALL
                            </Button> :
                            <p>No Phone</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default List;


