import React, { memo, useState } from 'react'

import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {

  // 记录选中的过滤项
  const [selectItems, setSelectItems] = useState([])

  // 点击事件处理函数
  const itemClickHandler = item => {
    // 浅拷贝一份当前数据
    const newSelectItems = [...selectItems]
    // 判断是否已经选中
    if (newSelectItems.includes(item)) {
      newSelectItems.splice(newSelectItems.indexOf(item), 1)
    } else {
      newSelectItems.push(item)
    }
    setSelectItems(newSelectItems)
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div
                className={classNames('item', { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandler(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter