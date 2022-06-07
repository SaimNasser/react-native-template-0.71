import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  primaryContainer: {
    backgroundColor: 'blue',
  },
  secondaryContainer: {
    backgroundColor: 'yellow',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  primaryText: {
    color: 'white',
    fontSize: 15,
  },
  secondaryText: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});

export default styles;
