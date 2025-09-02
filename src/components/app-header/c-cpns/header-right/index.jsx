import React, { memo, useState, useEffect } from 'react'
import { AppHeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const AppHeaderRight = memo(() => {

  // 控制下拉菜单的显示
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    // body点击事件
    const handleClick = () => setShowPanel(false)

    // 监听事件，true代表捕获阶段，默认为false事件冒泡阶段
    window.addEventListener('click', handleClick, true)

    // 取消监听
    return () => window.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <AppHeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn"><IconGlobal /></span>
      </div>
      <div className="profile" onClick={e => setShowPanel(true)}>
        <IconMenu />
        <IconAvatar />

        {/* 下拉菜单 */}
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助中心</div>
            </div>
          </div>
        )}
      </div>
    </AppHeaderRightWrapper>
  )
})

export default AppHeaderRight