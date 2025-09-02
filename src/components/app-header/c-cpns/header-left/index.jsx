import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppHeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const AppHeaderLeft = memo(() => {

  // 点击logo事件
  const navigate = useNavigate()
  const logoClickHandle = () => {
    navigate('/home')
  }

  return (
    <AppHeaderLeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </AppHeaderLeftWrapper>
  )
})

export default AppHeaderLeft