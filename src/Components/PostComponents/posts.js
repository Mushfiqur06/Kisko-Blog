import React, { Component } from 'react';
import Post from './SinglePost/post'

class Posts extends Component{
    render(){
        return(
            <div>
                {this.props.posts.map( (post, index) => {
                    return <Post key={index} post={post} />
                })}
            </div>
        )
    }
}

export default Posts