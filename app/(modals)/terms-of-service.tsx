import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';

const colors = {
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  border: '#3A3A3A',
};

export default function TermsOfService() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms of Service</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Terms of Service</Text>
        <Text style={styles.lastUpdated}>Last updated: December 2024</Text>

        <Text style={styles.sectionTitle}>1. Agreement to Terms</Text>
        <Text style={styles.body}>
          By accessing and using Dharma Quest, you agree to be bound by these terms and conditions.
        </Text>

        <Text style={styles.sectionTitle}>2. Use License</Text>
        <Text style={styles.body}>
          We grant you a limited, non-exclusive license to use our service for personal, non-commercial purposes.
        </Text>

        <Text style={styles.sectionTitle}>3. Limitations</Text>
        <Text style={styles.body}>
          You may not reverse engineer, decompile, or attempt to derive the source code of our service.
        </Text>

        <Text style={styles.sectionTitle}>4. Modifications</Text>
        <Text style={styles.body}>
          We reserve the right to modify these terms at any time. Changes are effective when posted to the app.
        </Text>

        <Text style={styles.sectionTitle}>5. Governing Law</Text>
        <Text style={styles.body}>
          These terms are governed by applicable law and are subject to the exclusive jurisdiction of the courts.
        </Text>

        <Text style={styles.sectionTitle}>6. Contact</Text>
        <Text style={styles.body}>
          For questions about these terms, contact us at legal@dharmaquest.com
        </Text>
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
    marginBottom: 8,
  },
  lastUpdated: {
    fontSize: 12,
    color: colors.lightText,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: colors.lightText,
    lineHeight: 22,
  },
});
