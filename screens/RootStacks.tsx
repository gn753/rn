import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTabs from './MainTabs';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
