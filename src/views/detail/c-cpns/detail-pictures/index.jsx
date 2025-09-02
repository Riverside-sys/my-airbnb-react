import React, { memo } from 'react'
import { DetailPicturesWrapper } from './style'

import { useDetailStore } from '@/store/detailStore'

const DetailPictures = memo(() => {
  // 从store中获取房源数据
  const detailInfo = useDetailStore.use.detailInfo()

  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </DetailPicturesWrapper>
  )
})

export default DetailPictures