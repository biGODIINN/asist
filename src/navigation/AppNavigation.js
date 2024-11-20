import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { InicioStack } from './NavTrabajadores/InicioStack';
import { MarcacionStack } from './NavTrabajadores/MarcacionStack';
import { SolicitudesStack } from './NavTrabajadores/SolicitudesStack';
import { HistorialStack } from './NavTrabajadores/HistorialStack';
import { AjustesStack } from './NavTrabajadores/AjustesStack';
import { EnrolamientoStack } from './NavAdministrador/EnrolamientoStack';
import { TrabajadoresStack } from './NavAdministrador/TrabajadoresStack';
import { MetricasStack } from './NavAdministrador/MetricasStack';
import { SolicitudesAdminStack } from './NavAdministrador/SolicitudesAdminStack';
import { InicioAdminStack } from './NavAdministrador/InicioAdminStack';
import { screen } from "../utils";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TrabajadorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true, 
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}>
      <Tab.Screen name={screen.inicio.tab} component={InicioStack} options={{ headerShown: false, title: "Inicio"}} />
      <Tab.Screen name={screen.marcacion.tab} component={MarcacionStack} options={{ headerShown: false, title: "Marcación" }} />
      <Tab.Screen name={screen.historial.tab} component={HistorialStack} options={{ title: "Historial" }} />
      <Tab.Screen name={screen.solicitudes.tab} component={SolicitudesStack} options={{ title: "Solicitudes" }} />
      <Tab.Screen name={screen.ajustes.tab} component={AjustesStack} options={{ title: "Ajustes" }} />
    </Tab.Navigator>
  );
}

function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,  // Mostrar encabezado
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}>
      <Tab.Screen name={screen.inicioadmin.tab} component={InicioAdminStack} options={{ headerShown: false, title: "Inicio" }} />
      <Tab.Screen name={screen.enrolamiento.tab} component={EnrolamientoStack} options={{ title: "Enrolamiento" }} />
      <Tab.Screen name={screen.trabajadores.tab} component={TrabajadoresStack} options={{ title: "Trabajadores" }} />
      <Tab.Screen name={screen.metricas.tab} component={MetricasStack} options={{ title: "Métricas" }} />
      <Tab.Screen name={screen.solicitudesadmin.tab} component={SolicitudesAdminStack} options={{ title: "Solicitudes" }} />
    </Tab.Navigator>
  );
}

export function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TrabajadorTab" component={TrabajadorTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AdminTab" component={AdminTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}



function screenOptions(route, color, size) {
    let iconSource;

    if (route.name === screen.inicio.tab) {
        iconSource = require('../../assets/img/Home.png');
    }

    if (route.name === screen.marcacion.tab) {
        iconSource = require('../../assets/img/marcacion.png');
    }

    if (route.name === screen.historial.tab) {
        iconSource = require('../../assets/img/historial.png'); 
    }

    if (route.name === screen.solicitudes.tab) {
        iconSource = require('../../assets/img/solicitud.png'); 
    }

    if (route.name === screen.ajustes.tab) {
      iconSource = require('../../assets/img/ajustes.png');
    }

    if (route.name === screen.inicioadmin.tab) {
      iconSource = require('../../assets/img/Home.png');
  }

    if (route.name === screen.enrolamiento.tab) {
        iconSource = require('../../assets/img/Enrolamiento.png');
    }

    if (route.name === screen.metricas.tab) {
        iconSource = require('../../assets/img/Metricas.png');
    }

    if (route.name === screen.solicitudesadmin.tab) {
        iconSource = require('../../assets/img/solicitud.png'); 
    }

    if (route.name === screen.trabajadores.tab) {
        iconSource = require('../../assets/img/Trabajadores.png'); 
    }

    const reducedSize = size * 0.9;

    return (
        <Image
            source={iconSource}
            style={{ width: reducedSize, height: reducedSize, tintColor: color }} 
        />
    );
}