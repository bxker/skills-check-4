const getAllPosts = async (req, res) => {
    const db = req.app.get('db');
    const posts = await db.posts.getAllPosts(); 
    res.status(200).json(posts);
}

const getPostsByUser = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.query;
    const posts = await db.posts.getPostsByUser(`${username}%`); 
    res.status(200).json(posts);
}

const getPostsByPost = async (req, res) => {
    const db = req.app.get('db');
    const {post_id} = req.params;
    const post = await db.posts.getPostsByPost(post_id); 
    res.status(200).json(post);
}

const postBlog = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {title, img, content} = req.body;

    const post = await db.posts.postBlog(user_id, title, img, content);
    res.status(200).json(post)

}

module.exports = {
    getAllPosts,
    getPostsByUser,
    getPostsByPost,
    postBlog
}