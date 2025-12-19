import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { X, Plus } from 'lucide-react-native';
import { useState } from 'react';

const colors = {
  primary: '#8B5CF6',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

export default function Manifestation() {
  const router = useRouter();
  const [goal, setGoal] = useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manifestation</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Manifestation Board</Text>

        <TextInput
          style={styles.input}
          placeholder="What do you want to manifest?"
          placeholderTextColor={colors.lightText}
          value={goal}
          onChangeText={setGoal}
        />

        <TouchableOpacity style={styles.addButton}>
          <Plus color={colors.text} size={20} />
          <Text style={styles.addButtonText}>Add Goal</Text>
        </TouchableOpacity>

        <View style={styles.goalCard}>
          <Text style={styles.goalIcon}>💫</Text>
          <Text style={styles.goalText}>Inner peace and spiritual growth</Text>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalIcon}>🙏</Text>
          <Text style={styles.goalText}>Strengthen my meditation practice</Text>
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
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  addButtonText: {
    color: colors.text,
    fontWeight: '600',
  },
  goalCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  goalIcon: {
    fontSize: 28,
  },
  goalText: {
    color: colors.text,
    fontSize: 14,
    flex: 1,
  },
});
