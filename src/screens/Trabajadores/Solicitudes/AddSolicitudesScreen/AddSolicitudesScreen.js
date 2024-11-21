import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function AddSolicitudesScreen() {
  const [date, setDate] = useState({ day: 'Día', month: 'Mes', year: 'Año' });
  const [showPicker, setShowPicker] = useState(false);
  const [pickerType, setPickerType] = useState('');
  const [marcacion, setMarcacion] = useState('Ingreso'); 

  const openPicker = (type) => {
    setPickerType(type);
    setShowPicker(true);
  };

  const handlePickerChange = (itemValue) => {
    setShowPicker(false);
    if (pickerType === 'day') {
      setDate({ ...date, day: itemValue });
    } else if (pickerType === 'month') {
      setDate({ ...date, month: itemValue });
    } else if (pickerType === 'year') {
      setDate({ ...date, year: itemValue });
    }
  };

  const yearOptions = Array.from({ length: 100 }, (_, i) => 2025 - i);

  const handleSubmit = () => {

    console.log("Solicitud enviada", { date, marcacion });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Agregar Solicitudes</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Seleccione el tipo de solicitud:</Text>
          <Picker
            selectedValue={marcacion}
            onValueChange={(itemValue) => setMarcacion(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Ingreso" value="Ingreso" />
            <Picker.Item label="Egreso" value="Egreso" />
          </Picker>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Seleccione la fecha:</Text>
          <View style={styles.dateInputs}>
            <TouchableOpacity style={styles.input} onPress={() => openPicker('day')}>
              <Text>{date.day}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} onPress={() => openPicker('month')}>
              <Text>{date.month}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} onPress={() => openPicker('year')}>
              <Text>{date.year}</Text>
            </TouchableOpacity>
          </View>

          {showPicker && (
            <Picker
              selectedValue={pickerType === 'day' ? date.day : pickerType === 'month' ? date.month : date.year}
              onValueChange={handlePickerChange}
              style={styles.picker}
            >
              {pickerType === 'day' && Array.from({ length: 31 }, (_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
              {pickerType === 'month' && Array.from({ length: 12 }, (_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
              {pickerType === 'year' && yearOptions.map((year) => (
                <Picker.Item key={year} label={`${year}`} value={year} />
              ))}
            </Picker>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Seleccione el tipo de solicitud:</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[styles.button, marcacion === 'Ingreso' && styles.selectedButton]} 
              onPress={() => setMarcacion('Ingreso')}
            >
              <Text style={styles.buttonText}>Ingreso</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, marcacion === 'Salida' && styles.selectedButton]} 
              onPress={() => setMarcacion('Salida')}
            >
              <Text style={styles.buttonText}>Salida</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Observaciones:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Ingresa una descripción de los motivos 
                         por los cuales deseas realizar tu solicitud."
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar Solicitud</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },

    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    optionContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    dateContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },

    dateInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
    },

    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        marginHorizontal: 5,
        backgroundColor: '#f0f0f0',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    picker: {
        height: 200,
        width: '100%',
    },

    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        minHeight: 150,
        maxHeight: 300,
    },

    submitButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 20, 
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    button: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },

    selectedButton: {
        backgroundColor: '#4CAF50',
    },
    
});
