import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (
      firstName.trim() === "" &&
      lastName.trim() === "" &&
      email.trim() === ""
    ) {
      alert("Fill in the fields");
    } else {
      alert(` Your details have been saved: \n Name : ${firstName} ${lastName} \n Email: ${email}`);
    }
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  const handleClear = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    alert("Cleared")
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Contact Form</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          placeholder="Enter first name"
          placeholderTextColor={"black"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          placeholder="Enter last name"
          placeholderTextColor={"black"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter email"
          placeholderTextColor={"black"}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: "red" }}
        onPress={handleClear}
      >
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputGroup: {
    width: "80%",
    marginTop:12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 15,
    padding: 10 
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "80%",
    marginBottom: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
