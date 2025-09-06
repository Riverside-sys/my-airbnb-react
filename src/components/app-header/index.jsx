import React, { memo } from 'react'
import classNames from 'classnames'

import { AppHeaderWrapper } from './style'
import AppHeaderLeft from './c-cpns/header-left'
import AppHeaderCenter from './c-cpns/header-center'
import AppHeaderRight from './c-cpns/header-right'
import { useConfigStore } from '@/store/configStore'

const AppHeader = memo(() => {
  // 从store中获取头部配置信息
  const headerConfig = useConfigStore.use.headerConfig()
  const { isFixed } = headerConfig

  return (
    <AppHeaderWrapper className={classNames({ 'fixed': isFixed })}>
      <AppHeaderLeft />
      <AppHeaderCenter />
      <AppHeaderRight />
    </AppHeaderWrapper>
  )
})

export default AppHeader