import React from "react"
import { connect } from "react-redux"
import { selectSong } from "../store/actions"

class SongList extends React.Component {
  renderList() {
    console.log(this.props)
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song)
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs,
  }
}

export const SongListConnected = connect(mapStateToProps, {
  selectSong,
})(SongList)
