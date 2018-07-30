import React from 'react';

const Post = (props) => {
    return (
        <div className='postWrapper'>
            <h2>{props.post.title}</h2>
            <p>{props.post.desc}</p>
        </div>
    )
}

export default Post;