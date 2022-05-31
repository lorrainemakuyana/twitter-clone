import React from 'react'
import '../styles/Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post( { displayName, username, verified, text, image, avatar  } ) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F23%2F21233545%2Fnetflix-avatar-the-last-airbender-may-15th&psig=AOvVaw2aq_w9KhtOqtFqENuBR6aI&ust=1649527830624000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLDQoqKIhfcCFQAAAAAdAAAAABAD' />
			</div>

			<div className='post__body'>
				<div className='post__header'>
					<div className='post__headerText'>
						<h3>
							Lorraine Makuyana <span className='post_headerSpecial'> <VerifiedUserIcon className='post_badge' /> </span>
						</h3>
					</div>
				
					<div className='post__headerDescription'>
						<p>I challenge you to build this and finish today!</p>
					</div>
				</div>
				<img src='' alt='' />
				<div className='post__footer'>
					<ChatBubbleOutlineIcon fontSize="small" />
					<RepeatIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small" />
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	)
}

export default Post