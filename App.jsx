import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
// import { useTensorflowModel } from "react-native-fast-tflite";
// import { launchImageLibrary } from "react-native-image-picker";
// import { ImageManipulator } from 'expo-image-manipulator'; // Optional: For image resizing if needed

const App = () => {
  const [model, setModel] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Load the TensorFlow Lite model
  // const plugin = useTensorflowModel(require("./assets/mobilenet_224.tflite"));

  // useEffect(() => {
  //   if (plugin) {
  //     console.log("Model loaded successfully.");
  //     setModel(plugin);
  //   } else {
  //     console.log("Model loading failed.");
  //   }
  // }, [plugin]);

  // // Handle image selection
  // const uploadImage = () => {
  //   setLoading(true);
  //   launchImageLibrary({ mediaType: "photo", maxHeight: 112, maxWidth: 112 }, async (response) => {
  //     if (response.assets && response.assets.length > 0) {
  //       const selectedImage = response.assets[0].uri;
  //       console.log("Selected image URI: ", selectedImage);

  //       try {
  //         // Resize image to 112x112 if necessary
  //         const resizedImage = await ImageManipulator.manipulateAsync(selectedImage, [
  //           { resize: { width: 112, height: 112 } }
  //         ]);
          
  //         // Here you should convert the resized image to tensor (RGB, Normalized, etc.)
  //         // This is just a simulation of inference, replace with actual image processing.
  //         const dummyInput = new Array(112 * 112 * 3).fill(0.5); // Example input with normalized values

  //         // Run inference (this would need the actual tensor data from the image)
  //         const inferenceResult = model?.runSync([dummyInput]);

  //         setResult(inferenceResult ? `Result: ${inferenceResult}` : "Inference failed");
  //       } catch (error) {
  //         console.error("Error processing image:", error);
  //         setResult("Image processing failed");
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       console.log("Image selection cancelled or failed.");
  //       setLoading(false);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      {/* {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text style={styles.text}>TensorFlow Lite Model Check</Text>
      <Text style={styles.text}>Model State: {model ? "Loaded" : "Not Loaded"}</Text>

      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Select Image for Inference</Text>
      </TouchableOpacity> */}

      <Text style={styles.resultText}>testing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
