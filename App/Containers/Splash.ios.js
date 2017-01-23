import React from 'react'
import ReactNative from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/Splash'

const { ScrollView, Image, View, DatePickerIOS, Text } = ReactNative

export default class Splash extends React.Component {
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
  }

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours
  }

  onDateChange = (date) => {
    this.setState({date})
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <DatePickerIOS
            date={this.state.date}
            mode='datetime'
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
        </ScrollView>
      </View>
    )
  }
}

