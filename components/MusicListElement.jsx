import { Pressable, StyleSheet, View, Text } from 'react-native';

const MusicListElement = ({ info, onHandleSelect, selectedId }) => {
    
  const {id, name, producer} = info;

  const isSelected = () => {
    
    if (selectedId !== id) {
        return false
    }

    return true;
  }

  return (
    <Pressable onPress={() => onHandleSelect(id)}>
        <View style={isSelected ? styles.containerSelect : styles.container}>
            <Text>{name} | {producer}</Text>
        </View>
    </Pressable>
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
        backgroundColor: '#cc6600'
    }
});

export default MusicListElement;