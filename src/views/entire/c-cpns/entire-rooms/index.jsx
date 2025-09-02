import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { EntireRoomsWrapper } from './style'
import { useEntireStore } from '@/store/entireStore'
import RoomItem from '@/components/room-item'
import { useDetailStore } from '@/store/detailStore'

const EntireRooms = memo(() => {
  // 房间列表数据
  const roomList = useEntireStore.use.roomList()
  // 总数据个数
  const totalCount = useEntireStore.use.totalCount()
  // 是否正在请求数据过程中
  const isLoading = useEntireStore.use.isLoading()

  // 点击item事件(传给子组件)
  const navigate = useNavigate()
  const itemClickHandle = useCallback(itemData => {
    navigate('/detail')
    // 将itemData存储到store中
    useDetailStore.setState({ detailInfo: itemData })
  }, [navigate])

  return (
    <EntireRoomsWrapper>
      {roomList.length > 0 && <h2 className="title">共{totalCount}多处住所</h2>}
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClickHandle} />
            )
          })
        }
      </div>
      {/* 页面切换请求数据过程中的遮罩 */}
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms