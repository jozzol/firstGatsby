import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'



const BlogPage = ({data}) => {
  return (
    <Layout heading="My Blog Posts">
      <ul>
          {
              data.allFile.nodes.map(node => (
                  <li key={node.name}>{node.name}</li>
              ))
          }
      </ul>
    </Layout>
  )
}
// se le podria agregar un nombre a la query como tal que iria al inicio despues de grapql, con el fin de debuggin en caso de errores
export const query = graphql`
    query{
    allFile {
      nodes {
        name
      }
    }
  }`
  

export default BlogPage