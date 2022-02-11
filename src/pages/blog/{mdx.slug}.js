import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout heading="Super Cool Blog Posts">
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage 
        image= {image}
        alt = {data.mdx.frontmatter.alt}
      />
      <p>
        Photo Credit: {' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}
// this query only works for bring 1 single image and requires all pages to keep the same format in the mdx. else I would be bringing null and that is causing errors
export const query = graphql` 
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      date
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

// console.log(BlogPost.props)
export default BlogPost