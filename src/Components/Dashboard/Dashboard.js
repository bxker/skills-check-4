import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllPosts} from '../../redux/reducers/postsReducer';
import {getSession} from '../../redux/reducers/userReducer';
import '../styles/Dashboard/Dashboard.sass';

class Dashboard extends Component {

    componentDidMount(){
        this.props.getSession()
        this.props.getAllPosts()
    }

    render() {
        return (
            <div className="dashboard-main">
                <div>
                    <input></input>
                    <button>Search</button>
                </div>
                    {this.props.posts ? this.props.posts.map((post, i) => {
                        return(
                            <div className="dashboard-post-card" key={i}>
                                <img src={post.profile_pic}></img>
                                <h1>{post.username}</h1>
                                <h1>{post.title}</h1>
                                <button>See Post</button>
                            </div>
                        )
                    }): null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        posts: reduxState.postsReducer.posts,
        username: reduxState.userReducer.username
        
    }
}

export default connect(mapStateToProps, {
    getAllPosts,
    getSession
})(Dashboard)
