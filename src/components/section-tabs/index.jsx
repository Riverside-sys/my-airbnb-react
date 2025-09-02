import React, { memo, useRef } from 'react'
import classNames from 'classnames'

import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo(props => {
  const { tabNames = [], tabClick } = props

  // 记录当前选中tab的索引
  const currentIndexRef = useRef(0)

  // 点击tab项
  const itemClickHandle = (index, tabItem) => {
    currentIndexRef.current = index
    // 调用tabClick回调函数，让父组件获取当前选中tab的索引
    tabClick(index, tabItem)
  }

  return (
    <SectionTabsWrapper>
      {/* 滚动组件 */}
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                className={classNames('tab-item', { active: index === currentIndexRef.current })}
                key={item}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

export default SectionTabs