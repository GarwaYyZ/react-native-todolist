import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Alert } from 'react-native';
import { Header } from './components/Header.jsx';
import CardToDo from './components/CardToDo.jsx';
import styles from './app.style.js';
import { TabBottomMenu } from './components/TabBottomMenu.jsx';
import BoutonAdd from './components/BoutonAdd.jsx';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isFirstRender = true;
let isLoadUpdate = false;

const App = () => {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (!isFirstRender && !isLoadUpdate) {
      saveTodoList();
    } else {
      isFirstRender = false;
    }
  }, [toDoList]);

  const deleteTodo = (todoToDelete) => {
    Alert.alert(
      "Suppression",
      "Supprimer cette tâche ?",
      [
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => {
            const updatedTodoList = toDoList.filter(todo => todo.id !== todoToDelete.id);
            setToDoList(updatedTodoList);
          },
        },
        {
          text: "Annuler",
          style: "cancel",
        }
      ]
    );
  };

  const updateTodo = (todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const indexToUpdate = toDoList.findIndex((item) => item.id === updatedTodo.id);
    const updatedTodoList = [...toDoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setToDoList(updatedTodoList);
  };

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return toDoList;
      case "inProgress":
        return toDoList.filter((todo) => !todo.isCompleted);
      case "done":
        return toDoList.filter((todo) => todo.isCompleted);
      default:
        return toDoList;
    }
  }

  function renderToDoList() {
    const filteredList = getFilteredList();
    return filteredList.map(todo => (
      <CardToDo key={todo.id} toDo={todo} onPress={updateTodo} onLongPress={deleteTodo} />
    ));
  }
  
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function showAddDialog() {
    setIsAddDialogVisible(true);
  }

  function addTodo() {
    const newTodo = {
      id: Math.random().toString(),
      title: inputValue,
      isCompleted: false,
    };
    setToDoList([...toDoList, newTodo]);
    setIsAddDialogVisible(false);
  }

  async function saveTodoList() {
    console.log("SAVE");
    try {
      await AsyncStorage.setItem("@todolist", JSON.stringify(toDoList));
    } catch (err) {
      alert("Erreur " + err);
    }
  }

  async function loadTodoList() {
    console.log("LOAD");
    try {
      const stringifiedTodoList = await AsyncStorage.getItem("@todolist");
      if (stringifiedTodoList !== null) {
        const parsedTodoList = JSON.parse(stringifiedTodoList);
        isLoadUpdate = true;
        setToDoList(parsedTodoList);
      }
    } catch (err) {
      alert("Erreur " + err);
    }
  }

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderToDoList()}
      </ScrollView>
      <View style={styles.footer}>
        <TabBottomMenu onPress={setSelectedTabName} selectedTabName={selectedTabName} />
      </View>
      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => setIsAddDialogVisible(false)}
      >
        <Dialog.Title>Créer une tâche</Dialog.Title>
        <Dialog.Description>Choisissez un nom pour la nouvelle tâche</Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label="Créer"
          onPress={addTodo}
        />
      </Dialog.Container>
      <BoutonAdd onPress={showAddDialog} />
    </SafeAreaView>
  );
};

export default App;
