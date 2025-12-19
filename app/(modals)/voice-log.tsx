import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { X, Mic } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

export default function VoiceLog() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voice Logs</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Record Insights</Text>

        <TouchableOpacity style={styles.recordButton}>
          <Mic color={colors.text} size={32} />
          <Text style={styles.recordButtonText}>Start Recording</Text>
        </TouchableOpacity>

        <View style={styles.logCard}>
          <Text style={styles.logDate}>Today at 10:30 AM</Text>
          <Text style={styles.logDuration}>02:45</Text>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>▶ Play</Text>
          </TouchableOpacity>
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
    marginBottom: 32,
  },
  recordButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },
  recordButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  logCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  logDate: {
    fontSize: 12,
    color: colors.lightText,
    marginBottom: 8,
  },
  logDuration: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  playButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  playButtonText: {
    color: colors.text,
    fontWeight: '600',
  },
});
