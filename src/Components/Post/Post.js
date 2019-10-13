import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div style={{marginLeft: '50vw'}}>
                <h1>{this.props.match.params.id}</h1>
                <h1>Post Component</h1>
            </div>
        )
    }
}
