import React, { memo, useRef, useEffect } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
  const { selectedIndex = 0 } = props
  const contentRef = useRef(null)

  useEffect(() => {
    // 获取当前索引对应的Item
    const currentItem = contentRef.current.children[selectedIndex]

    // 算法--计算要滚动的距离
    const itemLeft = currentItem.offsetLeft
    const itemWidth = currentItem.clientWidth
    // 计算视口宽度
    const viewWidth = contentRef.current.clientWidth
    // 设置滚动距离
    let distance = itemLeft + itemWidth * 0.5 - viewWidth * 0.5

    // 特殊情况处理：
    // 1.滚动到下一个时，如果距离为负数，则不用移动
    if (distance < 0) distance = 0
    // 2.滚动到上一个时，如果已经滚动的距离 > 最多能移动的距离，则不用移动
    // 最多移动的距离 = 所有item的宽度 - 视口宽度
    const maxDistance = contentRef.current.scrollWidth - viewWidth
    if (distance > maxDistance) distance = maxDistance

    // 设置滚动样式
    contentRef.current.style.transform = `translateX(-${distance}px)`

  }, [selectedIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator