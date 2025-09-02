import React, { memo } from 'react'
import { Pagination } from 'antd'

import { EntirePaginationWrapper } from './style'
import { useEntireStore, fetchRoomListAction } from '@/store/entireStore'

const EntirePagination = memo(() => {
  // 从store中获取总数据个数
  const totalCount = useEntireStore.use.totalCount()
  // 从store中获取当前页码
  const currentPage = useEntireStore.use.currentPage()

  // 利用当前页码计算起始和结束的房源
  const start = currentPage * 20 + 1
  const end = start + 19

  // 分页器页码改变事件
  const pageChangeHandle = (page, _pageSize) => {
    // 回到页面顶部
    window.scrollTo(0, 0)
    // 再次发送网络请求
    fetchRoomListAction(page - 1)
  }

  return (
    <EntirePaginationWrapper>
      <div className="info">
        <Pagination defaultCurrent={1} total={totalCount} pageSize={20} showSizeChanger={false} onChange={(page, _pageSize) => pageChangeHandle(page, _pageSize)} />
        <div className="desc">
          第{start}-{end}个房源，共超过{totalCount}个
        </div>
      </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination