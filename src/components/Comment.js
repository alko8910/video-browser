
import React from 'react'
import like from '../images/likes.jpg'
const Comment = ({text, likes, auth, image, time}) => {
    const time1 = time.replace('T', ' ').replace('Z', '')
    return (
        <div className='commentsDiv' style={{border: '1px solid black',  padding: '7px'}}>
            <div style={{fontWeight:'bold'}}>
                <img src={image} alt='Profile ' style={{marginRight:'7px'}}/>
                {auth}
            </div>
           <div >
           <br/>
               {text}
              
           </div>
           <div >
           <br/>
               {time1}
               <div>
               <img src={like}  alt='Likes' style={{width:'20px', height:'20px'}}/> {likes}
               </div>
               
           </div>
        </div>
    )
}

export default Comment
