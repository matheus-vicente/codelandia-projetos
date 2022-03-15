import React, { BaseHTMLAttributes } from "react"

import "./styles.css"

import { Post as PostData } from "../../hooks/posts"
import HeartIcon from "../../assets/heart-icon.png"
import FilledHeartIcon from "../../assets/filled-heart-icon.png"

interface PostProps extends BaseHTMLAttributes<HTMLDivElement> {
  post: PostData
}

export const Post: React.FC<PostProps> = ({ post, ...props }) => {
  return (
    <div {...props} className="post-container">
      <div className="post-head">
        <span>{post.createdAt}</span>
        {
          post.favorited
            ? <img src={FilledHeartIcon} alt="Favoritado" />
            : <img src={HeartIcon} alt="Não favoritado" />
        }
      </div>

      <h4>{post.title}</h4>

      <p>{post.content}</p>
    </div>
  )
}
