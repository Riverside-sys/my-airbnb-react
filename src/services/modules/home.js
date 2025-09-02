import request from '@/services/request'

// 枚举地址
const URL = {
  // 高性价比房源数据
  GOOD_PRICE: '/home/goodprice',
  // 高分房源数据
  HIGH_PRICE: '/home/highscore',
  // 折扣房源数据
  DISCOUNT: '/home/discount',
  // 热门房源推荐
  HOT_RECOMMEND: '/home/hotrecommenddest',
  // 向往房源推荐
  LONG_FOR: '/home/longfor',
  // PLUS房源推荐
  PLUS: '/home/plus',
}

// 高性价比房源数据
export const getHomeGoodPriceData = () => request.get(URL.GOOD_PRICE)

// 高分房源数据
export const getHomeHighScoreData = () => request.get(URL.HIGH_PRICE)

// 折扣房源数据
export const getHomeDiscountData = () => request.get(URL.DISCOUNT)

// 热门房源推荐
export const getHomeHotRecommendData = () => request.get(URL.HOT_RECOMMEND)

// 向往房源推荐
export const getHomeLongForData = () => request.get(URL.LONG_FOR)

// PLUS房源推荐
export const getHomePlusData = () => request.get(URL.PLUS)