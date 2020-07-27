import React from "react"
import ReactDOM from "react-dom"

import faker from "faker"

import { CommentDetail } from "./CommentDetail"
import { ApprovalCard } from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo={new Date().toDateString()}
          avatar={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo={new Date().toDateString()}
          avatar={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo={new Date().toDateString()}
          avatar={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
