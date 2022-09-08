import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from "./firebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

function Feed() {

  //hooks to get state vaule
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const the_query = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(
      the_query,
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      },
      (error) => {
        // ...
      });
 
    /* db.collection('posts')
      .orderBy('timestamp, desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      ); */

  }, []); /* [] runs the code once when the feed component load */

  return (
    <div className='feed'>
      <StoryReel /> 
      <MessageSender /> 
      
    {posts.map((post) =>(
        <Post
          key={post.id} // for efficient react rendering
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      )
      )}

    </div>
  )
}

export default Feed;