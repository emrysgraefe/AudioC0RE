import React from 'react'
import SiteLayout from '../layouts/SiteLayout'
import { graphql } from 'gatsby'

const CityPage = ({ data }) => {
  return ( 
    <SiteLayout>
      <h1>{data.contentfulCities.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulCities.description.description }}></div>
    </SiteLayout>
  )
}
export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulCities(slug: {eq: $slug}) {
      description {
        description
      }
      slug
      name
    }
  }
`
export default CityPage