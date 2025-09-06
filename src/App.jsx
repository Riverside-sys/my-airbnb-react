import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
// 引入路由配置文件
import routes from './router'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import useScrollTop from '@/hooks/useScrollTop'

const App = memo(() => {
  // 监听路由变化，当路由发送变化时，滚动到页面顶部
  useScrollTop()

  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App