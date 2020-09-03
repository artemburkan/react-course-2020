import React from "react"

import UserCreate from "./UserCreate"
import LanguageContext from "../context/LanguageContext"
import ColorContext from "../context/ColorContext"

export class App extends React.Component {
  state = { language: "english" }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>

        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}