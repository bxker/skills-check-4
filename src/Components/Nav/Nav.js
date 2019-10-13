import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducers/userReducer';
import '../styles/Nav/Nav.sass';

class Nav extends Component {
    render(){
        return (
            <>
                <div className="nav-main">
                    <section className="nav-section-1">
                        <img src={this.props.profile_pic}></img>
                    </section>
                    <div className="nav-section-3">
                        <Link to="/dashboard"><button>Home</button></Link>
                        <Link to="/add"><button>Add Post</button></Link>
                    </div>
                    <section className="nav-section-2">
                        <Link to="/"><button onClick={this.props.logoutUser}>Logout</button></Link>
                    </section>
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
