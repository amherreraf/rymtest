import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Character} from '../../../domain/entities/character';
import {FadeInImage} from '../ui/FadeInImage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigator/StackNavigator';

interface Props {
  character: Character;
}

export const CharacterCard = ({character}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      style={styles.general}
      onPress={() =>
        navigation.navigate('CharacterScreen', {id: character.id})
      }>
      <View style={[styles.cardContainer]}>
        <View style={styles.general}>
          <View>
            <FadeInImage uri={character.image} style={styles.characterImage} />
          </View>
          <View style={styles.viewName}>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <View style={styles.viewType}>
            <Text style={styles.species}>{character.species}</Text>
            {character.type && (
              <Text style={styles.type}>{`-${character.type}-`}</Text>
            )}
          </View>
          <View style={styles.viewMore}>
            <Text style={styles.moreInfo}>{'More info...'}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  general: {
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#22204b',
    height: 310,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  viewName: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    height: 50,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  species: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewType: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    height: 50,
  },
  type: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  viewMore: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4,
  },
  moreInfo: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
