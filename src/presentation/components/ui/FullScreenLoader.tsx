import {StyleSheet, View, ActivityIndicator} from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View style={styles.all}>
      <ActivityIndicator size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
