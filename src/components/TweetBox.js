import React from 'react'
import '../styles/TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
	return (
		<div className='tweetbox'>
			<form>
				<div className='tweetbox__input'>
					<Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F23%2F21233545%2Fnetflix-avatar-the-last-airbender-may-15th&psig=AOvVaw2aq_w9KhtOqtFqENuBR6aI&ust=1649527830624000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLDQoqKIhfcCFQAAAAAdAAAAABAD' />
					<input placeholder={'What\'s happening'} type='text'></input>
				</div>
				<input className='tweetBox__imageInput' placeholder='Optional: Enter image URL' type='text'></input>
				<Button className='tweetBox__tweetButton'>Tweet</Button>
			</form>
		</div>
	)
}

export default TweetBox