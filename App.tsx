import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from "./src/componnet/TabBar";

import AppNavigation from './src/router/Navigation';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}