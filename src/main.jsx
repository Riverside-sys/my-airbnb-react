import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// 清除默认样式
import 'normalize.css'
import '@/assets/css/reset.less'
import { ThemeProvider } from 'styled-components'
// import { ThemeProvider } from '@mui/material/styles'
// 解决antd在react19中报错的问题
import '@ant-design/v5-patch-for-react-19'

import App from '@/App.jsx'
// 引入主题样式
import theme from '@/assets/theme'
import '@/assets/css/common.less'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
)

