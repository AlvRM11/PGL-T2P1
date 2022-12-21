import { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import uuid from 'react-native-uuid';
import MusicListElement from "./components/MusicListElement";

export default function App() {

  const MUSICLIST = [
    {
      id: uuid.v4(),
      name: 'HYPNOPOLIS Trailer',
      producer: 'A BMW Original Podcast'
    },
    {
      id: uuid.v4(),
      name: 'Episode 01: Woken',
      producer: 'A BMW Original Podcast'
    },
    {
      id: uuid.v4(),
      name: 'Episode 02: Insomnia',
      producer: 'A BMW Original Podcast'
    },
    {
      id: uuid.v4(),
      name: 'Episode 03: Nightride',
      producer: 'A BMW Original Podcast'
    },
    {
      id: uuid.v4(),
      name: 'Episode 04: Disorder',
      producer: 'A BMW Original Podcast'
    },
    {
      id: uuid.v4(),
      name: 'Episode 05: Arcadia',
      producer: 'A BMW Original Podcast'
    },
  ];

  const [ elements, setElements ] = useState(MUSICLIST);
  const [ selected, setSelectElement] = useState(0);

  const handlePress = (id) => {
    setSelectElement(id);
  };

  return (
    <View style={styles.container}>
      {
        !elements.length
          ?
            <View><Text>No music yet</Text></View>
          :
            <FlatList
              data={ elements }
              keyExtractor={ (item) => item.id }
              renderItem={ ({ item }) => <MusicListElement info={item} handlePress={handlePress} selectedId={selected}/>} 
              style={ styles.flatListStyles }
            />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyles: {
    width: '100%',
    marginTop: 20
  }
});
