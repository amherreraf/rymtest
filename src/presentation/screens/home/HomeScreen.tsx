import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import {getCharacter} from '../../../actions/characters';
import {useInfiniteQuery} from '@tanstack/react-query';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CharacterCard} from '../../components/characters/CharacterCard';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const debouncedValue = useDebouncedValue(term);

  const {data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['characters', 'infinite', debouncedValue],
    initialPageParam: 1,
    queryFn: params => getCharacter(params.pageParam, debouncedValue),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 20}]}>
      <View>
        <Text style={styles.title}>Rick and Morty Characters</Text>
      </View>
      <TextInput
        placeholder="Search"
        mode="flat"
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
        style={styles.input}
      />

      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(character, index) => `${character.id}-${index}`}
        numColumns={2}
        style={styles.flatlist}
        renderItem={({item}) => <CharacterCard character={item} />}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
  },
  flatlist: {
    paddingBottom: 60,
    marginBottom: 100,
  },
});
