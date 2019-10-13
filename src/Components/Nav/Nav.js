import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducers/userReducer';

class Nav extends Component {
    render(){
        return (
            <>
                <div>
                    <section>
                        <img src={this.props.profile_pic}></img>
                    </section>
                    <section>
                        <Link to="/"><button onClick={this.props.logoutUser}>Logout</button></Link>
                    </section>
                </div>
                <div>
                    <Link to="/dashboard"><button>Home</button></Link>
                    <Link to="/add">Add Post</Link>
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        profile_pic: reduxState.userReducer.profile_pic
    }
}

export default connect(mapStateToProps, {
    logoutUser
})(Nav)
