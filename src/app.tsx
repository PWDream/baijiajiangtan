import 'taro-ui/dist/style/index.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Hot from './pages/Hot/index'
import store from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/hot/index',
      'pages/daily/index',
      'pages/category/index',
      'pages/setting/index',
      'pages/detail/index',
      'pages/detail/PlayAudio'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '百家讲坛',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/hot/index',
          text: '热门推荐',
          iconPath: './asset/images/tabbar/index.png',
          selectedIconPath: './asset/images/tabbar/index_focus.png'
        },
        {
          pagePath: 'pages/daily/index',
          text: '每日更新',
          iconPath: './asset/images/tabbar/discovery.png',
          selectedIconPath: './asset/images/tabbar/discovery_focus.png'
        },
        {
          pagePath: 'pages/category/index',
          text: '分类',
          iconPath: './asset/images/tabbar/burger.png',
          selectedIconPath: './asset/images/tabbar/burger_focus.png'
        },
        {
          pagePath: 'pages/setting/index',
          text: '个人',
          iconPath: './asset/images/tabbar/user.png',
          selectedIconPath: './asset/images/tabbar/user_focus.png'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Hot />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
