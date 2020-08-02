import React from "react"
import { SearchBar } from "./SearchBar"
import { unsplash } from "../api/unsplash"
import { ImageList } from "./ImageList"

export class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    )

    const images = response.data.results
    this.setState({ images })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
