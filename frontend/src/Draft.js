import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

const App = () => {
  const [image, setImage] = useState(null);

  const handleUpload = (event) => {
    const imageUri = event.nativeEvent.uri;
    setImage(imageUri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <Text style={styles.title}>Plant Disease Detection</Text>
        <Text style={styles.description}>
          This app uses machine learning to identify plant diseases from images.
        </Text>
      </View>
      <View style={styles.rightPanel}>
        <Text style={styles.subtitle}>Upload an Image:</Text>
        <Button title="Choose Image" onPress={() => alert('Button pressed')} />
        {image && <Image style={styles.image} source={{ uri: image }} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 1,
    padding: 20,
  },
  rightPanel: {
    flex: 2,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});

export default App;
