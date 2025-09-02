import React, { memo } from 'react'

import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo(props => {
  const { infoData } = props

  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongForItem key={item.city} itemData={item} />
            })
          }
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

export default HomeLongFor