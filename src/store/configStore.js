import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// 引入自动生成选择器函数
import { createSelectors } from '@/utils/createSelectors'

// 初始化状态
const initialState = {
  // 头部相关配置
  headerConfig: {
    isFixed: false,       // 是否固定定位
  }
}

// 创建Store
const useConfigStoreBase = create(
  devtools(() => ({ ...initialState }), { name: 'configStore' })
)

// 使用自动生成选择器
export const useConfigStore = createSelectors(useConfigStoreBase)