import React from "react"
import Service from "../Service"

const Services = ({ data }) => {
  const { frontmatter } = data[0].node
  const { Itemlist } = frontmatter
  return (
    <>
      <Service list={Itemlist} />
    </>
  )
}

export default Services
