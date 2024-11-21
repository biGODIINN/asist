import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const scale = (size) => (width / 375) * size;

export function MetricasScreen({ route }) {
  const { view } = route.params; // Recibimos el parámetro 'view' de la navegación
  const [selectedView, setSelectedView] = useState(view || 'metricas'); // Establecemos el valor inicial de la vista

  const [selectedFilter, setSelectedFilter] = useState('diario');

  const handleSelectView = (view) => {
    setSelectedView(view);
  };

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContentContainer}>
        {/* CONTENEDOR BOTONES */}
        <View style={[styles.buttonContainer, styles.shadowBox]}>
          <TouchableOpacity
            style={[styles.button, selectedView === 'miFicha' ? styles.selectedButton : styles.unselectedButton]}
            onPress={() => handleSelectView('miFicha')}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, selectedView === 'miFicha' ? styles.selectedText : styles.unselectedText]}>
              Mi Ficha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, selectedView === 'metricas' ? styles.selectedButton : styles.unselectedButton]}
            onPress={() => handleSelectView('metricas')}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, selectedView === 'metricas' ? styles.selectedText : styles.unselectedText]}>
              Métricas
            </Text>
          </TouchableOpacity>
        </View>

        {/* FOTO PERFIL */}
        <Image
          source={require('../../../../../assets/img/fotoperfil.png')}
          style={styles.image}
        />

        {/* NOMBRE Y CARGO */}
        <View style={styles.nameContainer}>
          <Text style={[styles.name, { fontSize: scale(22) }]}>Juan Pérez</Text>
          <Text style={[styles.jobTitle, { fontSize: scale(16) }]}>Desarrollador de Software</Text>
        </View>

        {/* FILTROS - Solo visible en "metricas" */}
        {selectedView === 'metricas' && (
          <View style={[styles.filtersContainer, styles.shadowBox]}>
            {['diario', 'semanal', 'mensual', 'anual'].map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[styles.filterButton, selectedFilter === filter ? styles.selectedFilter : styles.unselectedFilter]}
                onPress={() => handleSelectFilter(filter)}
              >
                <Text style={selectedFilter === filter ? styles.selectedFilterText : styles.unselectedFilterText}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* VISTA SELECCIONADA */}
        <View style={styles.metricsAndFichaContainer}>
          {selectedView === 'metricas' ? (
            <View style={styles.metricsContainer}>
              {/* METRICAS */}
              <Text style={[styles.metricTitle, { fontSize: scale(16) }]}>Horas Trabajadas</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <Text style={[styles.metricValue, { fontSize: scale(24) }]}>160</Text>
              </View>

              <Text style={[styles.metricTitle, { fontSize: scale(16) }]}>Atrasos</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <Text style={[styles.metricValue, { fontSize: scale(24) }]}>2</Text>
              </View>

              <Text style={[styles.metricTitle, { fontSize: scale(16) }]}>Ausencias</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <Text style={[styles.metricValue, { fontSize: scale(24) }]}>1</Text>
              </View>

              {/* Agrega más métricas si es necesario */}
            </View>
          ) : (
            <View style={styles.fichaContainer}>
              {/* DATOS PERSONALES */}
              <Text style={[styles.sectionTitle, { fontSize: scale(18) }]}>Datos Personales</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>Nombre:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>Juan Pérez</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>R.U.T:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>12.345.678-9</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>Correo:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>juan.perez@example.com</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>Teléfono:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>+56 9 1234 5678</Text>
                </View>
              </View>

              {/* EMPRESA */}
              <Text style={[styles.sectionTitle, { fontSize: scale(18) }]}>Empresa</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>Razón Social:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>Empresa Ejemplo S.A.</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { fontSize: scale(16) }]}>Fecha de Ingreso:</Text>
                  <Text style={[styles.infoValue, { fontSize: scale(16) }]}>01/01/2020</Text>
                </View>
              </View>

              {/* SUCURSALES */}
              <Text style={[styles.sectionTitle, { fontSize: scale(18) }]}>Sucursales</Text>
              <View style={[styles.metricBox, styles.shadow]}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Sucursal 1:</Text>
                  <Text style={styles.infoValue}>Calle Ficticia 789</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Sucursal 2:</Text>
                  <Text style={styles.infoValue}>Av. Secundaria 123</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  selectedButton: {
    backgroundColor: '#00a680',
  },
  unselectedButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
  unselectedText: {
    color: '#646464',
  },
  image: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
    alignSelf: 'center',
    marginBottom: 20,
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontWeight: 'bold',
    color: '#333',
  },
  jobTitle: {
    color: '#646464',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: -25,  
    borderRadius: 20,
    overflow: 'hidden',
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    borderWidth: 0,     
    backgroundColor: '#fff', 
  },  
  selectedFilter: {
    backgroundColor: '#00a680',
  },
  unselectedFilter: {
    backgroundColor: '#fff',
  },
  selectedFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unselectedFilterText: {
    color: '#646464',
    fontWeight: 'bold',
  },
  metricsAndFichaContainer: {
    marginTop: 20,
  },
  metricsContainer: {
    marginTop: 20,
  },
  metricBox: {
    backgroundColor: '#fff',
    padding: scale(45),
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  metricTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  metricValue: {
    fontWeight: 'bold',
    color: '#00a680',
  },
  fichaContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    color: '#333',
  },
  infoValue: {
    color: '#333',
    textAlign: 'right',
    flex: 1,
    marginLeft: 10,
  },
  sucursalesContainer: {
    marginTop: 20,
  },
});

export default MetricasScreen;
