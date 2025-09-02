import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// 引入自动生成选择器函数
import { createSelectors } from '@/utils/createSelectors'

// 初始化状态
const initialState = {
  detailInfo: {}
}

// 创建store
const useDetailStoreBase = create(
  devtools(() => ({ ...initialState }), { name: 'detailStore' })
)

// 使用自动生成选择器
export const useDetailStore = createSelectors(useDetailStoreBase)
