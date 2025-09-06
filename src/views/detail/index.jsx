import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'

import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { useConfigStore } from '@/store/configStore'

const Detail = memo(() => {
  // 设置头部配置信息
  useEffect(() => {
    useConfigStore.setState({
      headerConfig: {
        isFixed: false,
        topAlpha: false,
      }
    })
  }, [])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail