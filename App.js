// App.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  FlatList 
} from 'react-native';

export default function App() {
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');
  const [prodi, setProdi] = useState('');
  const [hobi, setHobi] = useState('');
  const [kesukaan, setKesukaan] = useState('');
  const [tampil, setTampil] = useState(false);
  const [isPink, setIsPink] = useState(false);

  const toggleTema = () => setIsPink(!isPink);
  const tema = isPink ? stylesPink : stylesBlue;

  // 🔥 Daftar drama
  const dramas = [
    { id: '1', title: 'Chef of Tyrant' },
    { id: '2', title: 'Alchemy of Souls' },
    { id: '3', title: 'Confident Queen' },
    { id: '4', title: 'Tempest' },
    { id: '5', title: 'Pretty Crazy' },
    { id: '6', title: 'Beyond the Bar' },
    { id: '7', title: 'Twelve' },
    { id: '8', title: 'Another Beyond the Bar' },
  ];

  return (
    <ScrollView contentContainerStyle={[tema.container]}>
      <View style={tema.header}>
        <Text style={tema.headerText}>Profil & Data Mahasiswa</Text>
      </View>

      {/* Input */}
      <TextInput style={tema.input} placeholder="Nama" value={nama} onChangeText={setNama} />
      <TextInput style={tema.input} placeholder="Umur" value={umur} onChangeText={setUmur} keyboardType="numeric" />
      <TextInput style={tema.input} placeholder="Prodi" value={prodi} onChangeText={setProdi} />
      <TextInput style={tema.input} placeholder="Hobi" value={hobi} onChangeText={setHobi} />
      <TextInput style={tema.input} placeholder="Kesukaan" value={kesukaan} onChangeText={setKesukaan} />

      {/* Tombol tampilkan */}
      <TouchableOpacity style={tema.button} onPress={() => setTampil(true)}>
        <Text style={tema.buttonText}>TAMPILKAN PROFIL</Text>
      </TouchableOpacity>

      {/* Output */}
      {tampil && (
        <Text style={tema.result}>
          Halo, nama saya {nama}, umur saya {umur} tahun, saya dari prodi {prodi}.
          Hobi saya adalah {hobi}, dan saya suka {kesukaan}.
        </Text>
      )}

      {/* 🎬 Daftar Drama */}
      <Text style={tema.listTitle}>Daftar Drama Kesukaan:</Text>
      <View style={{ width: '100%' }}>
        <FlatList
          data={dramas}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 5 }}>
              <Text style={tema.listItem}>🍿 {item.title}</Text>
            </View>
          )}
        />
      </View>

      {/* Tombol ganti tema */}
      <TouchableOpacity style={tema.switchButton} onPress={toggleTema}>
        <Text style={tema.switchText}>
          {isPink ? 'Ganti Tema: Baby Blue' : 'Ganti Tema: Baby Pink'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 🎨 Tema Baby Blue
const stylesBlue = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d6f0fa',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#91d4f7',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#91d4f7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#91d4f7',
    padding: 12,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    color: '#036d91',
    textAlign: 'center',
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#036d91',
  },
  listItem: {
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'left',
  },
  switchButton: {
    marginTop: 30,
    backgroundColor: '#91d4f7',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// 🎨 Tema Baby Pink
const stylesPink = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe4f0',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#ff9ecb',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff9ecb',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#ff9ecb',
    padding: 12,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    color: '#a32b63',
    textAlign: 'center',
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#a32b63',
  },
  listItem: {
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'left',
  },
  switchButton: {
    marginTop: 30,
    backgroundColor: '#ff9ecb',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
