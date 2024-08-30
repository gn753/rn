import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStacks';
import {LogContextProvider} from './context/LogConext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
