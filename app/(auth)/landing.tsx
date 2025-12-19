import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Sparkles, Heart, Zap } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
};

export default function Landing() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Dharma Quest</Text>
        <Text style={styles.subtitle}>Transform Your Spiritual Journey</Text>
      </View>

      <View style={styles.featureSection}>
        <View style={styles.featureCard}>
          <Heart color={colors.secondary} size={32} />
          <Text style={styles.featureTitle}>Daily Shlokas</Text>
          <Text style={styles.featureText}>Wisdom from Bhagavad Gita</Text>
        </View>

        <View style={styles.featureCard}>
          <Zap color={colors.primary} size={32} />
          <Text style={styles.featureTitle}>Spiritual Quests</Text>
          <Text style={styles.featureText}>Build lasting habits</Text>
        </View>

        <View style={styles.featureCard}>
          <Sparkles color={colors.secondary} size={32} />
          <Text style={styles.featureTitle}>Meditation & Prayer</Text>
          <Text style={styles.featureText}>Inner peace & mindfulness</Text>
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>Active Users</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>100K+</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Shlokas</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(auth)/auth')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(auth)/auth')}
        >
          <Text style={styles.secondaryButtonText}>I Already Have an Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colors.lightText,
    textAlign: 'center',
  },
  featureSection: {
    marginBottom: 40,
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
  },
  featureText: {
    fontSize: 14,
    color: colors.lightText,
    marginTop: 4,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#3A3A3A',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.lightText,
    marginTop: 4,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
