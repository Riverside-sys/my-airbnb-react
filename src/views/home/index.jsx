import React, { memo, useEffect } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
// 从store中获取发送请求的action
import {
  fetchHomeGoodPriceDataAction,
  fetchHomeHighScoreDataAction,
  fetchHomeDiscountData,
  fetchHomeHotRecommendData,
  fetchHomeLongForDataAction,
  fetchHomePlusDataAction
} from '@/store/homeStore'
import { useHomeStore } from '@/store/homeStore'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongFor from './c-cpns/home-longfor'
import { isEmptyObject } from '@/utils/isEmptyObject'


const Home = memo(() => {

  // 发送网络请求
  useEffect(() => {
    fetchHomeGoodPriceDataAction()
    fetchHomeHighScoreDataAction()
    fetchHomeDiscountData()
    fetchHomeHotRecommendData()
    fetchHomeLongForDataAction()
    fetchHomePlusDataAction()
  }, [])


  // 高性价比房源数据
  const goodPriceInfo = useHomeStore.use.goodPriceInfo()
  // 高分房源数据
  const highScoreInfo = useHomeStore.use.highScoreInfo()
  // 折扣房源数据
  const discountInfo = useHomeStore.use.discountInfo()
  // 热门房源数据
  const hotRecommendInfo = useHomeStore.use.hotRecommendInfo()
  // 向往房源数据
  const longForInfo = useHomeStore.use.longForInfo()
  // PLUS房源数据
  const plusInfo = useHomeStore.use.plusInfo()

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣房源 */}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* 热门房源 */}
        {isEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
        {/* 向往房源数据 */}
        {isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        {/* 高性价比房源 */}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {/* 高分房源 */}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {/* PLUS房源 */}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home