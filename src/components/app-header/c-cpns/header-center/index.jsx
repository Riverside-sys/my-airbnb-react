import React, { memo, useState } from 'react'

import { AppHeaderCenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from '@/assets/data/search_titles.json'


const AppHeaderCenter = memo(() => {
  // 记录当前选中的tab的索引
  const [tabIndex, setTabIndex] = useState(0)

  // 从数据中获取titles
  const titles = SearchTitles.map(item => item.title)

  return (
    <AppHeaderCenterWrapper>
      {/* <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div> */}

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </AppHeaderCenterWrapper>
  )
})

export default AppHeaderCenter