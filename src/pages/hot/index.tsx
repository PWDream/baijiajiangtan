/**
 *  Created by pw on 2019-06-21 14:05.
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Banner from './elements/Banner'

export default class Hot extends Component {
  render() {
    return (
      <View>
        <Banner />
      </View>
    )
  }
}
