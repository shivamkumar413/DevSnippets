import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeHeader() {

    const insets = useSafeAreaInsets();

  return (
    <View style={StyleSheet.compose(
        styles.container,
        {
            paddingTop : insets.top
        }
    )}>
      <Text>HomeHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {

    }
})