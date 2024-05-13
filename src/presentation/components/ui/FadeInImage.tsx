import {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const isDisposed = useRef(false);

  const onLoadEnd = () => {
    if (isDisposed.current) {
      return;
    }
    fadeIn({});
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      isDisposed.current = true;
    };
  }, []);

  return (
    <View style={styles.center}>
      {isLoading && (
        <ActivityIndicator style={styles.absolute} color="grey" size={30} />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={onLoadEnd}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {justifyContent: 'center', alignItems: 'center'},
  absolute: {position: 'absolute'},
});
