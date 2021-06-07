import SignInButton from 'Components/Masthead/TrailingItems/SignInButton/SignInButton';
import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.p`
    margin: 0px;
    font-size: 15px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 25px;
`

const SignIn = () => {
    return (
        <Container>
            <Message>Sign in to like videos, comment, and subscribe.</Message>
            <SignInButton />
        </Container>
    )
}

export default SignIn;