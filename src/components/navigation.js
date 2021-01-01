import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.nav`
  width: 100%;
  background-color: aqua;
  display: flex;
  justify-content: center;
`
const NavList = styled.ul`
  display: flex;
  list-style: none;
  li {
    position: relative;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    a {
      text-decoration: none;
      background-color: violet;
      padding: 1.5rem 2.5rem;

      transition: background-color .2s ease;

      &:hover {
        background-color: #efefef;
      }
    }

    ul {
      position: absolute;
      top: 0;
      left: 0;
      list-style: none;
      display: none;
      flex-direction: column;
      padding-inline-start: 0;

      li {
        margin: 2.5rem 0 0 0;
      }
    }

    &:hover ul {
      display: flex;
    }
  }
`

const Navigation = props => {
  const data = useStaticQuery(graphql`
    query CitiesQuery {
      allContentfulCities {
        edges {
          node {
            slug
            name
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <NavBar role="navigation">
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="locations">Locations</Link>
          <ul>
            {data.allContentfulCities.edges.map( city => (
              <li key={city.node.contentful_id}>
                <Link to={`/locations/${city.node.slug}`}>{city.node.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </NavList>
    </NavBar>
  )
}

export default Navigation