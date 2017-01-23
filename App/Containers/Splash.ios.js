import React from 'react'
import ReactNative from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/Splash'
import Camera from 'react-native-camera'

const { ScrollView, Image, View, Text } = ReactNative

export default class Splash extends React.Component {
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
  }

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours
  }

  async takePhoto () {
    try {
      const data = await this.camera.capture()
      console.log(data)
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              <Text style={styles.capture} onPress={this.takePhoto.bind(this)}>[CAPTURE]</Text>
            </Camera>
          </View>
        </ScrollView>
      </View>
    )
  }
}

