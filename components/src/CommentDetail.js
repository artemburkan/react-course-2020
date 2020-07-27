import React from "react"
import faker from "faker"

export const CommentDetail = ({ author, timeAgo, avatar, content }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="data">Today at {timeAgo}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  )
}
