import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
