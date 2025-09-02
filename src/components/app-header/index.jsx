import React, { memo } from 'react'
import { AppHeaderWrapper } from './style'
import AppHeaderLeft from './c-cpns/header-left'
import AppHeaderCenter from './c-cpns/header-center'
import AppHeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <AppHeaderLeft />
      <AppHeaderCenter />
      <AppHeaderRight />
    </AppHeaderWrapper>
  )
})

export default AppHeader