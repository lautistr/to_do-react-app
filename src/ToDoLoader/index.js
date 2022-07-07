import React from "react"
import ContentLoader from "react-content-loader"

const ToDoLoader = (props) => (
  <ContentLoader 
    speed={1.8}
    width={189}
    height={42}
    viewBox="0 0 189 42"
    backgroundColor="#FAFAFA"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="10" rx="5" ry="5" width="169" height="32" />
  </ContentLoader>
)

export { ToDoLoader };