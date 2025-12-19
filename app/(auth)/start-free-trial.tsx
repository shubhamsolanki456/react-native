import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Check } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
};

const TRIAL_FEATURES = [
  'Unlimited Daily Shlokas',
  'Access to All Meditation Guides',
  'Mantra Counter Tool',
  'Spiritual Journal',
  'AI Chat Assistant',
  'Prayer Scheduler',
];

export default function StartFreeTrial() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStartTrial = async () => {
    setLoading(true);
    setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 1000);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>7-Day Free Trial</Text>
        <Text style={styles.subtitle}>Experience the full power of Dharma Quest</Text>
      </View>

      <View style={styles.priceSection}>
        <Text style={styles.priceLarge}>$0</Text>
        <Text style={styles.priceSubtitle}>for 7 days</Text>
        <Text style={styles.disclaimer}>Then $9.99/month. Cancel anytime.</Text>
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>What's Included</Text>
        {TRIAL_FEATURES.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Check color={colors.primary} size={24} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleStartTrial}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Starting...' : 'Start Free Trial'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.legalText}>
          By starting the trial, you agree to our Terms of Service and Privacy Policy
        </Text>
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
    marginTop: 40,
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.lightText,
    textAlign: 'center',
  },
  priceSection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingVertical: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#3A3A3A',
  },
  priceLarge: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  priceSubtitle: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.lightText,
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  footer: {
    gap: 16,
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  legalText: {
    fontSize: 12,
    color: colors.lightText,
    textAlign: 'center',
    lineHeight: 18,
  },
});
