import React from "react"
import { connect } from "react-redux"

import { fetchPostsAndUsers } from "../store/actions"
import UserHeader from "./UserHeader"

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader id={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    console.log("PostList", this.props)
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)
