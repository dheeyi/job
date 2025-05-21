import React from 'react';
import Form from './src/screens/Form.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 80 }}>
        <Form />
    </SafeAreaView>
  );
}

export default App;
