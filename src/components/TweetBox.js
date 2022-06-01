import React, {useState, useEffect} from 'react'
import '../styles/TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

function TweetBox() {

	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");
	
	const sendTweet = e => {

		e.preventDefault(); 

		db.collection("posts").add({
			displayName: "Lorraine Makuyana",
			username: "lorrainemakuyana",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
			  "https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png",
		});

		setTweetMessage(""); 
		setTweetImage("");

	}
	
	return (
		<div className='tweetbox'>
			<form>
				<div className='tweetbox__input'>
					<Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F23%2F21233545%2Fnetflix-avatar-the-last-airbender-may-15th&psig=AOvVaw2aq_w9KhtOqtFqENuBR6aI&ust=1649527830624000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLDQoqKIhfcCFQAAAAAdAAAAABAD' />
					<input
						value={tweetMessage}
						onChange={e => setTweetMessage(e.target.value)}
						placeholder={'What\'s happening'} type='text'></input>
				</div>
				<input className='tweetBox__imageInput'
					value={tweetImage} 
					onChange={e => setTweetImage(e.target.value)}
					placeholder='Optional: Enter image URL' type='text'></input>
				<Button 
					onClick={sendTweet}
					type="submit" 
					className='tweetBox__tweetButton'>Tweet</Button>
			</form>
		</div>
	)
}

export default TweetBox