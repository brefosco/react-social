import React, { useState } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'


export default function SocialLogin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [email, setEmail] = useState();

    const responseGoogle = response => {
        setName(response.profileObj.name);
        setImgUrl(response.profileObj.imageUrl);
        setEmail(response.profileObj.email);
        setLoggedIn(true)
    }

    const componentClicked = () => {
        console.log('clicked')
    }
    const responseFacebook = response => {
        setName(response.name)
        setEmail(response.email)
        setImgUrl(response.picture.data.url)
        setLoggedIn(true)
    }

    let loginButtons = (
        <>
            <div style={{margin:'20px'}}>
                <GoogleLogin
                    clientId="313762962559-1ughocqhr8tedcrdb5nh0j5rpj86ac38.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div style={{margin:'20px'}}>
                <FacebookLogin
                    appId="608474263114475"
                    autoload={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                />
            </div>
        </>
    )

    let profileContent = (
        <Card style={{ backgroundColor: '#f4f4f4', }}>
            <img style={{ width: '50px', height: '50px', borderRadius: '3px'}} src={imgUrl} alt={name} />
            <CardTitle><p className="h5">Welcome, {name}</p></CardTitle>
            <CardText>Email: {email}</CardText>
        </Card>
    )

    return (
        <div className="text-center" style={{ margin: '20px' }}>
            {loggedIn ? profileContent : loginButtons}
        </div>
    )
}
