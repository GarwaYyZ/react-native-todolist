import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2F76E5',
    backgroundColor: '#fff',
    elevation: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#2F76E5',
  },
  buttonTextSelected: {
    color: '#fff',
  },
});

export default styles;
