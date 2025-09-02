import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// 引入home模块请求方法
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from '@/services/modules/home'
// 引入自动生成选择器函数
import { createSelectors } from '@/utils/createSelectors'

// 初始化状态state
const initialState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  hotRecommendInfo: {},
  longForInfo: {},
  plusInfo: {}
}

// 创建store
const useHomeStoreBase = create(
  devtools(() => ({ ...initialState }), { name: 'homeStore' })
)

// 使用自动生成选择器
export const useHomeStore = createSelectors(useHomeStoreBase)


// 获取高性价比房源数据
export const fetchHomeGoodPriceDataAction = async () => {
  const res = await getHomeGoodPriceData()
  useHomeStore.setState({ goodPriceInfo: res })
}

// 获取高分房源数据
export const fetchHomeHighScoreDataAction = async () => {
  const res = await getHomeHighScoreData()
  useHomeStore.setState({ highScoreInfo: res })
}

// 获取折扣房源数据
export const fetchHomeDiscountData = async () => {
  const res = await getHomeDiscountData()
  useHomeStore.setState({ discountInfo: res })
}

// 获取热门房源数据
export const fetchHomeHotRecommendData = async () => {
  const res = await getHomeHotRecommendData()
  useHomeStore.setState({ hotRecommendInfo: res })
}

// 获取向往房源数据
export const fetchHomeLongForDataAction = async () => {
  const res = await getHomeLongForData()
  useHomeStore.setState({ longForInfo: res })
}

// 获取PLUS房源数据
export const fetchHomePlusDataAction = async () => {
  const res = await getHomePlusData()
  useHomeStore.setState({ plusInfo: res })
}