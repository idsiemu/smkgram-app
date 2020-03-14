import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { AsyncStorage } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import ApolloClient from "apollo-boost";
import apolloClientOptions from './apollo';
import { ThemeProvider } from "styled-components"
import { ApolloProvider } from 'react-apollo-hooks';
import styles from "./styles"
import NavControllers from './components/NavControllers';
import { AuthPorvider } from './AuthContext';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const preLoad = async() => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...apolloClientOptions
      });
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
    
  };
  useEffect(() => {
    preLoad();
  }, []);

  

  return loaded && client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthPorvider>
          <NavControllers />
        </AuthPorvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}
