import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllPosts, searchPosts} from '../../redux/reducers/postsReducer';
import {getSession} from '../../redux/reducers/userReducer';
import '../styles/Dashboard/Dashboard.sass';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

    componentDidMount(){
        this.props.getSession()
        this.props.getAllPosts()
    }

    componentDidUpdate(prevProps){
        if(prevProps.posts !== this.props.posts){

        }
    }

    handleInputText = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchUpdate = () => {
        const {searchText} = this.state
        this.props.searchPosts(searchText);
    }

    render() {
        return (
            <div className="dashboard-main">
                <div>
                    <input
                        placeholder="Search By Username"
                        name="searchText"
                        onChange={this.handleInputText}
                    ></input>
                    <button onClick={this.searchUpdate}>Search</button>
                </div>
                    {this.props.posts ? this.props.posts.map((post, i) => {
                        return(
                            <div className="dashboard-post-card" key={i}>
                                <img src={post.profile_pic}></img>
                                <h1>{post.username}</h1>
                                <h1>{post.title}</h1>
                                <Link to={`/post/${post.post_id}`}><button>See Post</button></Link>
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
    getSession,
    searchPosts
})(Dashboard)
