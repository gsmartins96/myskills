import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://e0cb4fc767b04856b0eec49bec91b84a@o336309.ingest.sentry.io/6172012",
  tracesSampleRate: 1.0,
});

export default function App(){
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home/>
    </>
  )
}