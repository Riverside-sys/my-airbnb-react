import React, { memo, useState } from 'react'
import { DetailPicturesWrapper } from './style'

import { useDetailStore } from '@/store/detailStore'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo(() => {
  // 存储是否展示图片浏览器的变量
  const [showBrowser, setShowBrowser] = useState(false)

  // 从store中获取房源数据
  const detailInfo = useDetailStore.use.detailInfo()

  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={e => setShowBrowser(true)}>查看照片</div>

      {/* 图片浏览器 */}
      {showBrowser && <PictureBrowser pictureUrls={detailInfo?.picture_urls} closeClick={e => setShowBrowser(false)} />}
    </DetailPicturesWrapper>
  )
})

export default DetailPictures