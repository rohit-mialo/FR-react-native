import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import RNFS from "react-native-fs";
import { useTensorflowModel } from "react-native-fast-tflite";

const Test = () => {
  const [modelPath, setModelPath] = useState(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  // Function to copy the model file from assets to DocumentDirectoryPath
  const copyModelFile = async () => {
    const filePath = `${RNFS.DocumentDirectoryPath}/ms1mv3_r34.tflite`;
    const fileExists = await RNFS.exists(filePath);

    if (!fileExists) {
      try {
        // Copy file from Android assets to DocumentDirectoryPath
        await RNFS.copyFileAssets("ms1mv3_r34.tflite", filePath);
        console.log("Model copied to DocumentDirectoryPath");
      } catch (error) {
        console.error("Error copying model file:", error);
      }
    }
    setModelPath(filePath);
  };

  useEffect(() => {
    // Copy model file on component mount
    copyModelFile();
  }, []);

  const plugin = useTensorflowModel(modelPath);

  useEffect(() => {
    if (plugin && plugin.state === "ready") {
      setModelLoaded(true);
      console.log("Model loaded successfully");
    } else {
      console.log("Model loading...");
    }
  }, [plugin]);

  return (
    <View>
      {modelLoaded ? (
        <Text>Model is ready for inference</Text>
      ) : (
        <Text>Loading model...</Text>
      )}
    </View>
  );
};

export default Test;
