import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colour, font, space } from '../common/theme'

const SiteName = styled.div`
  background-color: ${colour.blue};
  font-family: ${font.default};
  font-size: ${font.large};
  font-weight: 300;
  line-height: 1.2em;
  color: ${colour.darkbg};
  padding-left: ${space.m};
  padding-top: ${space.s};

  :hover {
    cursor: pointer;
  }
`

const SiteDomain = styled.span`
  font-weight: 500;
  color: ${colour.white};
`

const Logo = ({ siteName, siteDomain, history }) => (
  <SiteName onClick={() => history.push(`/`)}>
    {siteName}
    <SiteDomain>{siteDomain}</SiteDomain>
  </SiteName>
)

Logo.propTypes = {
  siteName: PropTypes.string.isRequired,
  siteDomain: PropTypes.string.isRequired
}

export default Logo