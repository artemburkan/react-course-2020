import React from "react"
import { ImageCard } from "./ImageCard"
import "./ImageList.css"

export const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}
