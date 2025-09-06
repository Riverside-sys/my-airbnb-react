/* 
  监听页面滚动位置
*/

import { useState, useEffect } from "react"
import { throttle } from "underscore"

export default function useScrollPosition() {
  // 记录页面滚动位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {
    // 记录最新滚动位置（节流）
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)

    // 组件卸载时移除监听
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}