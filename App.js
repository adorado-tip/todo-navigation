import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './routes/MyStack';
import MyDrawer from './routes/MyDrawer';
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}
