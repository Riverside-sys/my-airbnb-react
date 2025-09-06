import React, { memo, useState, useRef } from 'react'
import classNames from 'classnames'

import { AppHeaderWrapper, SearchAreaWrapper } from './style'
import AppHeaderLeft from './c-cpns/header-left'
import AppHeaderCenter from './c-cpns/header-center'
import AppHeaderRight from './c-cpns/header-right'
import { useConfigStore } from '@/store/configStore'
import useScrollPosition from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {
  // 定义是否显示搜索区域
  const [isSearch, setIsSearch] = useState(false)

  // 从store中获取头部配置信息
  const headerConfig = useConfigStore.use.headerConfig()
  const { isFixed } = headerConfig

  // 监听页面滚动
  const { scrollY } = useScrollPosition()
  // 记录上一次滚动位置
  const prevScrollYRef = useRef(0)
  if (!isSearch) prevScrollYRef.current = scrollY
  if (isSearch && Math.abs(scrollY - prevScrollYRef.current) > 50) setIsSearch(false)

  return (
    <AppHeaderWrapper className={classNames({ 'fixed': isFixed })}>
      <div className="content">
        <div className="top">
          <AppHeaderLeft />
          <AppHeaderCenter isSearch={isSearch} searchBarClick={e => setIsSearch(true)} />
          <AppHeaderRight />
        </div>
        <SearchAreaWrapper $isSearch={isSearch} />
      </div>
      {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
    </AppHeaderWrapper>
  )
})

export default AppHeader