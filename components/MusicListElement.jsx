import { Pressable, StyleSheet, View, Text } from 'react-native';

const MusicListElement = ({info, handlePress, selectedId}) => {
    
  const {id, name, producer, isPlaying} = info;

  const isSelected = () => {
    if (selectedId != id) {
        return false
    }

    return true;
  }

  return (
    <View style={isSelected ? styles.container : styles.containerSelect}>
        <Pressable onPress={() => handlePress(id)}>
            <Text>{name} | {producer}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        padding: 15
    },
    containerSelect: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        padding: 15,
        color: 'orange',
        backgroundColor: '#cc660'
    },
    test: {
        color: 'gray'
    }
});

export default MusicListElement;