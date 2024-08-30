import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStacks';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
