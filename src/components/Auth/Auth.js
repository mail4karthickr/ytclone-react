import React, { Component } from 'react';

class Auth extends Component {

    componentDidMount() {
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        let url = new URL(oauth2Endpoint);
        url.searchParams.set('client_id', '661448538780-j1r5skuvf6h367vj4rg9hh8tbhv4ipal.apps.googleusercontent.com');
        url.searchParams.set('redirect_uri', 'https://ytclone-367d2.firebaseapp.com/auth');
        url.searchParams.set('response_type', 'token');
        url.searchParams.set('scope', 'https://www.googleapis.com/auth/drive.metadata.readonly');
        url.searchParams.set('include_granted_scopes', 'true');
        url.searchParams.set('state', 'pass-through value');

        window.location.href = url.toString();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Auth;