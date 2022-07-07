import React from "react"
import ContentLoader from "react-content-loader"

const ToDoLoader = (props) => (
  <ContentLoader 
    speed={1.8}
    width={239}
    height={72}
    viewBox="0 0 279 72"
    backgroundColor="#FAFAFA"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="10" rx="5" ry="5" width="249" height="52" />
  </ContentLoader>
)

export { ToDoLoader };