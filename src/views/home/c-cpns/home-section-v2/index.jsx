import React, { memo, useState, useCallback } from 'react'

import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo(props => {
  const { infoData } = props

  // 获取第一个tabName进行初始化
  const initialTabName = Object.keys(infoData.dest_list)[0]
  // 记录当前选中的tabName
  const [tabName, setTabName] = useState(initialTabName)
  // 从数据中过滤出tabNames
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 点击tab项
  const tabClickHandle = useCallback((_index, tabItem) => {
    setTabName(tabItem)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[tabName]} itemWidth='33.3333%' />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2