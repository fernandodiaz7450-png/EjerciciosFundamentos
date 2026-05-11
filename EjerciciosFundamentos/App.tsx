import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

export default function App() {

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [edad, setEdad] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const saludarUsuario = (nombre) => {
    return `Hola, ${nombre}! Bienvenido a React Native`;
  };

  const tareas = [
    { id: 1, nombre: "Hacer tarea" },
    { id: 2, nombre: "Estudiar React Native" },
    { id: 3, nombre: "Practicar programación" },
  ];

  const completarDatos = () => {
    setMostrarResultado(true);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Ejercicios React Native
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombreUsuario}
        onChangeText={setNombreUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese su edad"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />

      <Button
        title="Completar"
        onPress={completarDatos}
      />

      {mostrarResultado && (
        <View>

          <Text style={styles.subtitulo}>
          </Text>

          <Text style={styles.texto}>
            Usuario: {nombreUsuario}
          </Text>

          <Text style={styles.texto}>
            {saludarUsuario(nombreUsuario)}
          </Text>

          <Text style={styles.subtitulo}>
          </Text>

          <Text style={styles.texto}>
            Edad: {edad}
          </Text>

          <Text style={styles.texto}>
            {parseInt(edad) >= 18
              ? "Mayor de edad"
              : "Menor de edad"}
          </Text>

          <Text style={styles.subtitulo}>
          </Text>

          {tareas.map((tarea) => (
            <View key={tarea.id} style={styles.item}>
              <Text style={styles.texto}>
                {tarea.nombre}
              </Text>
            </View>
          ))}

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    backgroundColor: "#f2f2f2",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  texto: {
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});