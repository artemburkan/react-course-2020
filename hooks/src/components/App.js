import React, { useState, useEffect } from "react"
import ResourceList from "./ResourceList"
import UserList from "./UserList"

export const App = () => {
  const [state, setState] = useState({ resource: "posts" })
  const resource = state.resource

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setState({ resource: "posts" })}>Posts</button>
        <button onClick={() => setState({ resource: "todos" })}>Todos</button>
      </div>
      <ResourceList resource={state.resource} />
    </div>
  )
}
