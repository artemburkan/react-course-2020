import React from "react"
import { SongListConnected } from "./SongList"
import { SongDetailConnected } from "./SongDetail"

export const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongListConnected />
        </div>
        <div className="column eigth wide">
          <SongDetailConnected />
        </div>
      </div>
    </div>
  )
}
