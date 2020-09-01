import { httpClient } from "./httpClient"

function fetchStreams(formValues) {
  return httpClient.post("/streams", formValues)
}
