import React from 'react'
import ReactNative from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/Splash'
import RoundedButton from '../Components/RoundedButton'

const { ScrollView, Image, View, DatePickerAndroid } = ReactNative

export default class Splash extends React.Component {
  async pickDate () {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(year, month, day)
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message)
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <RoundedButton onPress={this.pickDate}>
            选时间
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}
