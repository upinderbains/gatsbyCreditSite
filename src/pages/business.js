import React from "react"
import { Layout } from "../components"
import { graphql } from "gatsby"
import Home from "../components/business/Home"
import About from "../components/business/About"
import Features from "../components/business/Features"

const business = ({ data }) => {
  return (
    <Layout>
      <Home data={data.home.edges} />
      <About data={data.about.edges} />
      <Features data={data.feature.edges} />
    </Layout>
  )
}

export default business

export const query = graphql`
  {
    home: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/business/" }
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
        fileAbsolutePath: { regex: "/business/" }
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
        fileAbsolutePath: { regex: "/business/" }
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
        fileAbsolutePath: { regex: "/business/" }
        frontmatter: { section: { eq: "rewards" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            rewardsList {
              text
              title
            }
          }
        }
      }
    }
  }
`
