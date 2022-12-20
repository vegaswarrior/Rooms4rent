import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Las Vegas Rooms For Rent',
  description: 'Private Rooms For Rent In Las Vegas',
  keywords: 'Shared House, Private Bath, Private Room, Master Bedroom, Free WIFI, Furnished, Unfurnished',
}

export default Meta
