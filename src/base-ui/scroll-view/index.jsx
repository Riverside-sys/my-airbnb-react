import React, { memo, useState, useEffect, useRef } from 'react'
import { ScrollViewWrapper } from './style'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo(props => {
  // 控制右边按钮是否显示
  const [showRight, setShowRight] = useState(false)
  // 控制左边按钮是否显示
  const [showLeft, setShowLeft] = useState(false)

  // 记录当前位置索引（可视窗口最左侧item的索引）
  const posIndexRef = useRef(0)
  // 滚动内容ref
  const scrollContentRef = useRef(null)
  // 记录总共能滚动的距离
  const totalDistanceRef = useRef(0)

  // 组件渲染完毕，判断是否显示右侧按钮
  useEffect(() => {
    // 获取滚动内容的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 获取滚动内容的可视宽度
    const clientWidth = scrollContentRef.current.clientWidth
    // 计算总共能滚动的距离
    totalDistanceRef.current = scrollWidth - clientWidth
    // 判断是否显示右侧按钮
    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])


  // 点击切换按钮
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    // 计算要滚动的距离（已经滚动了的距离）
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`
    posIndexRef.current = newIndex
    // 判断是否显示右侧按钮（当总共能滚动的距离>已经滚动了的距离，则继续显示）
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    // 判断是否显示左侧按钮（当已经滚动的距离>0，则显示）
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView