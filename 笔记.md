# 爱彼迎项目重点笔记

## SVG图片处理

这里我们把SVG设计成一个React组件(.jsx文件)，而不是像图片那样使用src引入，以下是这样做的原因：

<img src="C:\Users\WangSuwei\AppData\Roaming\Typora\typora-user-images\image-20250826164634646.png" alt="image-20250826164634646" style="zoom: 67%;" />

### 对比 img 引入 SVG 的劣势

- img 只能简单显示 SVG，无法直接控制内部样式、颜色、部分元素的显示与否，也无法绑定 React 事件。

- img 方式不支持 SVG 的动态渲染和交互。

### SVG写成组件的优势

#### 可控性更强

- 样式可控：通过 React 组件，可以直接用 style、className、props 等方式动态控制 SVG 的样式、颜色、大小等属性。

#### 代码复用与组合

- 可复用：SVG 组件可以像普通 React 组件一样复用，甚至可以组合、嵌套其他组件。

- 参数化：可以通过 props 传递参数，比如颜色、尺寸、动画开关等，灵活性远高于 img。

#### 性能与优化

- 无需额外请求：SVG 代码直接嵌入页面，不需要像图片那样发起额外的 HTTP 请求，减少了网络开销。

- 可被 Tree Shaking：未被用到的 SVG 组件不会被打包进最终产物，减小包体积。

#### 交互性

- 可添加事件：SVG 组件可以直接绑定 onClick、onMouseEnter 等事件，方便实现交互效果。

- 可与 React 状态联动：SVG 的某些部分可以根据 React 的 state 动态渲染，比如进度条、动画等。

#### 代码一致性与可维护性

- 统一管理：所有图标都可以用组件的方式统一管理，便于维护和批量修改。

- 类型检查：配合 TypeScript，可以对 SVG 组件的 props 做类型检查，减少出错。

> 不过这里我们需要注意一点：react组件的style属性需要写成对象，而svg下载下来是字符串形式；因此我们需要使用网上找到的函数将style字符串转换为对象(utils/styleStrToObject.js)。
