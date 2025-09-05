import React, { memo, useRef, useState } from 'react'
// 引入antd星星评分组件
import { Rate } from 'antd'
// 引入antd轮播图组件
import { Carousel } from 'antd'
import classNames from 'classnames'

import { RoomItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%', itemClick } = props

  // 轮播图ref
  const carouselRef = useRef(null)
  // 记录轮播图当前选中索引
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 点击切换事件
  const controlClickHandle = (isRight, e) => {
    // 阻止事件冒泡
    e.stopPropagation()
    // 切换上一个面板/下一个面板
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    // 计算新的索引
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    // 计算极限情况
    if (newIndex < 0) newIndex = itemData?.picture_urls?.length - 1
    if (newIndex >= itemData?.picture_urls?.length) newIndex = 0
    // 记录新索引
    setSelectedIndex(newIndex)
  }

  // 展示效果1：一张封面图
  const pictureElement = () => {
    return (
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
    )
  }

  // 展示效果2：轮播图
  const swiperElement = () => {
    return (
      <div className="swiper">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false, e)}>
            <IconArrowLeft width={30} height={30} color='#fff' />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true, e)}>
            <IconArrowRight width={30} height={30} color='#fff' />
          </div>
        </div>
        <Carousel infinite={false} dots={false} ref={carouselRef}>
          {
            itemData?.picture_urls?.map(item => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </Carousel>
        <div className="indicator">
          <Indicator selectedIndex={selectedIndex}>
            {
              itemData?.picture_urls?.map((item, index) => {
                return (
                  <div className="item" key={item}>
                    <span className={classNames("dot", { active: selectedIndex === index })}></span>
                  </div>
                )
              })
            }
          </Indicator>
        </div>
      </div>
    )
  }

  // 点击item事件
  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData)
  }

  return (
    <RoomItemWrapper $itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {/* 选择一种展示效果 */}
        {!itemData.picture_urls ? pictureElement() : swiperElement()}

        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            value={itemData.star_rating ?? 5}
            allowHalf
            className='rate'
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem