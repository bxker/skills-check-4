const bcrypt = require('bcryptjs')

const getUser = async (req, res) => {
    res.status(200).json(req.session.user)
}

const register = async (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;
    
    const foundUser = await db.auth.checkForUsername(username);

    if(foundUser[0]){
        res.status(409).json('Username taken')
    }else{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.registerUser(username, hash);
        req.session.user = {
            user_id: newUser[0].user_id,
            username: newUser[0].username,
            profile_pic: newUser[0].profile_pic
        };
        res.status(200).json(req.session.user);
    }
}

const login = async (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;

    const foundUser = await db.auth.checkForUsername(username);

    if(!foundUser[0]){
        res.status(403).json('Username or Password is incorrect 1');
    }else{
        const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash)

        if(!isAuthenticated){
            res.status(403).json('Username or Password is incorrect 2');
        }else{
            req.session.user = {
                user_id: foundUser[0].user_id,
                username: foundUser[0].username,
                profile_pic: foundUser[0].profile_pic 
            }
            res.status(200).json(req.session.user)
        }
    }
}

const logout = async (req, res) => {
    req.session.destroy();
    res.status(200).json('logged out successfully')
}

module.exports = {
    getUser,
    register,
    login,
    logout
}