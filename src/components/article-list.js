import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'

export default () => (
    <StaticQuery

        query = {graphql `query {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    title
                    
                    date(formatString: "MMM YYY")
                  }
                  excerpt
                }
              }
            }
          }`

        }

        render = { data => (
            <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Article id={node.id}
                to='/'
                keywords={node.frontmatter.keywords}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt} />
            ))}
        </div>

        )}

    />
)