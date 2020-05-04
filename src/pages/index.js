import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import Features from "../components/Home/Features"
import Story from "../components/Home/Story"
import Services from "../components/Home/Services"
import Rewards from "../components/Home/Rewards"
import Home from "../components/Home/Home"

export default ({ data }) => {
  return (
    <Layout>
      <Home data={data.about.edges} />
      <Story />
      <Features data={data.feature.edges} />
      <Rewards data={data.rewards.edges} />
      <Services data={data.services.edges} />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/home/" }
        frontmatter: { section: { eq: "about" } }
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
    feature: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/home/" }
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
        fileAbsolutePath: { regex: "/home/" }
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
    services: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/home/" }
        frontmatter: { section: { eq: "services" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            Itemlist {
              subtitle
              text
            }
          }
        }
      }
    }
  }
`
