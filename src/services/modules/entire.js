import request from '@/services/request'

// 枚举地址
const URL = {
  // 房间列表数据
  ENTIRE_LIST: '/entire/list'
}

// 获取房间列表数据
export const getEntireRoomList = (offset = 0, size = 20) => request.get(URL.ENTIRE_LIST, {
  params: {
    offset,
    size
  }
})