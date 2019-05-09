import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/layout'
import Title from '../components/title'
import styles from './post.module.scss'

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className={styles.container}>
              <Title text={post.frontmatter.title}></Title>
              <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa'}} />
              <div className={styles.content} dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
          html
          frontmatter {
              title
              keywords
          }
      }
  }
  `