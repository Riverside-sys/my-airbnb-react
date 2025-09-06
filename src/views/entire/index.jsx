import React, { memo, useEffect } from 'react'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/entireStore'
import { useConfigStore } from '@/store/configStore'

const Entire = memo(() => {
  // 发送网络请求
  useEffect(() => {
    fetchRoomListAction()
  }, [])

  // 设置头部配置信息
  useEffect(() => {
    useConfigStore.setState({
      headerConfig: {
        isFixed: true,
        topAlpha: false,
      }
    })
  }, [])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire