import React, { useEffect, useState } from 'react'
import { Post } from '../api/types'
import PostItem from './PostItem'
import {getPosts} from '../api/post'
import { User } from '../api/types'
import {getAllUser} from '../api/user'
import UserProfile from '../components/UserProfile'

const PostsList = () => {
    const [posts, setPosts] = useState<Array<Post>>([])
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<Array<User>>([])

    async function _getPosts() {
        console.log("useEffect");
        const data = await getPosts();
        setPosts(data);
    }

    useEffect(() => {
        _getPosts();
    }, [])

    async function _getAllUsers() {
        console.log("useEffect");
        const data = await getAllUser();
        setUsers(data);
    }

    useEffect(() => {
        _getAllUsers();
    }, [])
    
    function renderItem(values: Post) {
        return (
            <div key={values.id}>
                <PostItem {...values} />
            </div>
        )
    }    
    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }

    if (posts.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Posts</p>
                </div>
            </section>
        )
    }

    return <ul className="post-list">{posts.map(renderItem)}</ul>
}

export default PostsList
