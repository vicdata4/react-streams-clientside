import React from 'react';
import oauth from '../auth_id'


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: oauth,
                scope: 'email'
            });
        });
    }

    render () {
        return <div>Google auth</div>;
    }
}

export default GoogleAuth;