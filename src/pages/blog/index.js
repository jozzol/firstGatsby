import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'




const BlogPage = ({data}) => {
  return (
    <Layout heading="My Blog Posts">
      <ul>
          {
              data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </article>
              ))
          }
      </ul>
    </Layout>
  )
}
// se le podria agregar un nombre a la query como tal que iria al inicio despues de grapql, con el fin de debuggin en caso de errores
export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date
        title
      }
      id
      slug
    }
  }
}`

  

export default BlogPage