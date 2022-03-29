import React, { Component } from 'react'

export class MapDanFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        };
    }
    render() {
        const userOnline = this.state.users.filter(user => user.online)
        const renderOnline = userOnline.map(user =>
            <li key={user.username}>{user.username}</li>)
        return (
            <div>
                <h1>Siapa saja yang Online</h1>
                <ul>{renderOnline} </ul>
            </div>
        )
    }
}

export default MapDanFilter