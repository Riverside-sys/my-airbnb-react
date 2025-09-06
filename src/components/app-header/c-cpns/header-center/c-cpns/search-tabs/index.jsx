import React, { memo, useState } from 'react'

import { SearchTabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo(props => {
  const { titles = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // tab-item点击事件
  const itemClickHandle = index => {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <SearchTabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={item}
              onClick={e => itemClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </SearchTabsWrapper>
  )
})

export default SearchTabs