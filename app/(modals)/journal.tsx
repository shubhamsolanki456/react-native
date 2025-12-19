import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { useState } from 'react';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
  input: '#1A1A1A',
};

export default function Journal() {
  const router = useRouter();
  const [entry, setEntry] = useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Journal</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Spiritual Journal</Text>
        <Text style={styles.subtitle}>Reflect on your spiritual journey</Text>

        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>

        <TextInput
          style={styles.input}
          placeholder="Write your thoughts and reflections..."
          placeholderTextColor={colors.lightText}
          value={entry}
          onChangeText={setEntry}
          multiline
          numberOfLines={12}
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Previous Entries</Text>
        <View style={styles.entryCard}>
          <Text style={styles.entryDate}>December 18, 2024</Text>
          <Text style={styles.entryPreview}>Today I learned about the importance of karma...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightText,
    marginBottom: 20,
  },
  date: {
    fontSize: 12,
    color: colors.lightText,
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 8,
    padding: 16,
    color: colors.text,
    fontSize: 14,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  saveButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  entryCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  entryDate: {
    fontSize: 12,
    color: colors.lightText,
    marginBottom: 8,
  },
  entryPreview: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
});
