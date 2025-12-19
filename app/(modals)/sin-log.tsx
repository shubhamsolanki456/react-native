import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

export default function SinLog() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Karma Tracker</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Karma Tracker</Text>
        <Text style={styles.subtitle}>Track your spiritual progress</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Positive Actions Today</Text>
          <Text style={styles.cardValue}>5</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Areas to Improve</Text>
          <Text style={styles.cardValue}>2</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Karma Score</Text>
          <Text style={styles.cardValue}>85%</Text>
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
    marginBottom: 24,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 14,
    color: colors.lightText,
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
});
