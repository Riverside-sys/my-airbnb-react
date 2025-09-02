import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// 引入自动生成选择器函数
import { createSelectors } from '@/utils/createSelectors'
import { getEntireRoomList } from '@/services/modules/entire'

// 初始化状态
const initialState = {
  currentPage: 0,  // 当前页码
  roomList: [],    // 房间列表
  totalCount: 0,   // 总数据个数
  isLoading: false, // 是否正在请求数据过程中
}

// 创建store
const useEntireStoreBase = create(
  devtools(() => ({ ...initialState }), { name: 'entireStore' })
)

// 使用自动生成选择器
export const useEntireStore = createSelectors(useEntireStoreBase)

// 获取房间列表数据
export const fetchRoomListAction = async (currentPage = 0) => {
  // 设置正在请求中
  useEntireStore.setState({ isLoading: true })
  // 记录最新的页码
  useEntireStore.setState({ currentPage: currentPage })
  const res = await getEntireRoomList(currentPage * 20)
  // 设置请求结束
  useEntireStore.setState({ isLoading: false })
  useEntireStore.setState({
    roomList: res.list,
    totalCount: res.totalCount,
  })
}


