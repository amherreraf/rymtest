import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCharacterById} from '../../../actions/characters';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {RootStackParams} from '../../../navigator/StackNavigator';
//import {useContext} from 'react';
//import {ThemeContext} from '../../context/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'CharacterScreen'> {}

export const CharacterScreen = ({route}: Props) => {
  //const {isDark} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const {id} = route.params;

  const {data: character} = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!character) {
    return <FullScreenLoader />;
  }

  return (
    <View style={styles.general}>
      <ScrollView
        style={styles.scroll}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              ...styles.characterName,
              top: top + 5,
            }}>
            {character.name}
          </Text>
        </View>
        <FadeInImage uri={character.image} style={styles.characterImage} />
        {character.gender && (
          <View style={styles.generalView}>
            <Text
              style={styles.generalText}>{`Gender:  ${character.gender}`}</Text>
          </View>
        )}
        {character.species && (
          <View style={styles.generalView}>
            <Text
              style={
                styles.generalText
              }>{`Specie:  ${character.species}`}</Text>
          </View>
        )}
        {character.type && (
          <View style={styles.generalView}>
            <Text style={styles.generalText}>{`Type:  ${character.type}`}</Text>
          </View>
        )}

        <View style={styles.bottom} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#22204b',
  },
  headerContainer: {
    height: 420,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  characterName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  characterImage: {
    width: 240,
    height: 240,
    borderRadius: 120,
    position: 'absolute',
    bottom: 60,
  },
  generalText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-start',
    left: 20,
  },
  generalView: {
    margin: 20,
  },
  bottom: {
    height: 100,
  },
});
