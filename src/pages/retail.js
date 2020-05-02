import React from "react"
import { graphql } from "gatsby"
import Home from "../components/retail/Home"
import { Layout } from "../components"
import About from "../components/retail/About"
import Features from "../components/retail/Features"
import Rewards from "../components/retail/Rewards"

const retail = ({ data }) => {
  return (
    <Layout>
      <Home data={data.home.edges} />
      <About data={data.about.edges} />
      <Features data={data.feature.edges} />
      <Rewards data={data.rewards.edges} />
    </Layout>
  )
}

export default retail

export const query = graphql`
  {
    home: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/retail/" }
        frontmatter: { section: { eq: "home" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            buttonText
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
    about: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/retail/" }
        frontmatter: { section: { eq: "about" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
    feature: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/retail/" }
        frontmatter: { section: { eq: "features" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            featureList {
              title
              text
            }
          }
        }
      }
    }
    rewards: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/retail/" }
        frontmatter: { section: { eq: "rewards" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            rewardsList {
              item
              subtitle
              points
            }
          }
        }
      }
    }
  }
`
