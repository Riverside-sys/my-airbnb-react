/* 
  监听路由变化，当路由发送变化时，滚动到页面顶部
*/

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}
