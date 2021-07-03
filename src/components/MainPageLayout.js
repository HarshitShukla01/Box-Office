import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
	return (
	<div>
	  <Title title="BOX OFFICE" subtitle="Are You Looking For A Movie Or An Actor?"/>
      <Navs />
      {children}
    </div>
	)
}

export default MainPageLayout