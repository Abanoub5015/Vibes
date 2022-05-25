import React from 'react'
import { useStateValue } from './StateProvider'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {

  const [{user}] = useStateValue(); // to dispatch data to my web-app

    return (
        <div className='storyReel'>
          <Story
            image={user.photoURL}
            profileSrc={user.photoURL}
            title={user.displayName}
          />
          <Story
            image="https://i.ibb.co/XZ88cdg/edition9-10-2021-IMG-20190711-182711.png"
            profileSrc="https://i.ibb.co/XZ88cdg/edition9-10-2021-IMG-20190711-182711.png"
            title="Bob"
          />
          <Story
            image="https://i.ibb.co/bQ2PGP0/vibes-pic.png"
            profileSrc="https://i.ibb.co/bQ2PGP0/vibes-pic.png"
            title="spooky"
          />
          <Story
            image="https://i1.sndcdn.com/artworks-cCWiYovtML64yOjO-smJ6XQ-t500x500.jpg"
            profileSrc="https://i1.sndcdn.com/artworks-cCWiYovtML64yOjO-smJ6XQ-t500x500.jpg"
            title="Sera"
          />
          <Story
            image="https://i.pinimg.com/originals/f7/16/73/f716734312e3da49cb1107e4f71aeb57.gif"
            profileSrc="https://i.pinimg.com/originals/f7/16/73/f716734312e3da49cb1107e4f71aeb57.gif"
            title="MILO"
          />  
          
        </div>
    )
}

export default StoryReel