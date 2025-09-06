import React, { memo, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { AppHeaderCenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from '@/assets/data/search_titles.json'


const AppHeaderCenter = memo(props => {
  // 记录当前选中的tab的索引
  const [tabIndex, setTabIndex] = useState(0)
  const barRef = useRef(null)
  const detailRef = useRef(null)

  const { isSearch, searchBarClick } = props

  // 从数据中获取titles
  const titles = SearchTitles.map(item => item.title)

  // 搜索栏点击事件
  const searchBarClickHandle = () => {
    if (searchBarClick) searchBarClick()
  }

  return (
    <AppHeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        nodeRef={barRef}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle} ref={barRef}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        nodeRef={detailRef}
        unmountOnExit={true}
      >
        <div className="search-detail" ref={detailRef}>
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </AppHeaderCenterWrapper>
  )
})

export default AppHeaderCenter