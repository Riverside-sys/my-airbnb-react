import React, { memo, useEffect, useState, useRef } from 'react'
import { PictureBrowserWrapper } from './style'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '@/base-ui/indicator'

const PictureBrowser = memo(props => {
  // 记录当前选中的索引
  const [currentIndex, setCurrentIndex] = useState(0)
  // 获取img的ref（动画使用）
  const imgRef = useRef(null)
  // 记录切换上/下一张图片
  const [isNext, setIsNext] = useState(true)

  const { pictureUrls = [], closeClick } = props

  // 点击切换按钮
  const controlClickHandle = isNext => {
    // 计算新索引
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    // 计算极限情况
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex >= pictureUrls.length) newIndex = 0
    // 记录新索引
    setCurrentIndex(newIndex)
    // 记录切换
    setIsNext(isNext)
  }

  // 当图片浏览器展示出来时，页面滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <PictureBrowserWrapper $isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} color='#fff' />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width={77} height={77} color='#fff' />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={currentIndex}
              classNames='pic'
              timeout={200}
              nodeRef={imgRef}
            >
              <img src={pictureUrls[currentIndex]} alt="" ref={imgRef} />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}：</span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle">
              <span>隐藏照片列表</span>
              <IconTriangleArrowTop />
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div className={classNames('item', { active: currentIndex === index })} key={item}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser