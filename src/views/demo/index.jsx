import React, { memo, useState } from 'react'

import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm']

  // 记录当前选中索引
  // const currentIndexRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // 点击切换事件
  const toggleClickHandle = isRight => {
    // 计算新的索引
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    // 计算极限情况
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex >= names.length) newIndex = 0
    // 记录新索引
    setCurrentIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => toggleClickHandle(false)}>上一个</button>
        <button onClick={e => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectedIndex={currentIndex}>
          {
            names.map(item => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo