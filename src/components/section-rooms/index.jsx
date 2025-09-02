import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionRoomsWrapper } from './style'

const SectionRooms = memo(props => {
  const { roomList = [], itemWidth } = props

  return (
    <SectionRoomsWrapper>
      {
        roomList?.slice(0, 8).map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
        })
      }
    </SectionRoomsWrapper>
  )
})

export default SectionRooms