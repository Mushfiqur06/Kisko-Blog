import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h2><a href="#">{props.post.title}</a></h2>
            <p>{props.post.desc}</p>
        </div>
    )
}

export default Post;