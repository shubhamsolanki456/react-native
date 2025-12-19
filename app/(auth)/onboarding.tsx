import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
};

const ONBOARDING_STEPS = [
  {
    id: 1,
    title: 'Daily Wisdom',
    description: 'Receive a new Shloka from Bhagavad Gita every day to guide your spiritual path',
    icon: '📿',
  },
  {
    id: 2,
    title: 'Spiritual Quests',
    description: 'Complete daily quests to build positive habits and strengthen your spiritual practice',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Meditate & Pray',
    description: 'Track your meditation sessions, prayer routines, and mantra chanting',
    icon: '🧘',
  },
  {
    id: 4,
    title: 'AI Guidance',
    description: 'Get personalized insights from our AI spiritual guide based on Vedic wisdom',
    icon: '✨',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const step = ONBOARDING_STEPS[currentStep];
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      router.push('/(auth)/start-free-trial');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    router.push('/(auth)/start-free-trial');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.stepIndicator}>
            {currentStep + 1} of {ONBOARDING_STEPS.length}
          </Text>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressBar}>
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              style={[styles.progressDot, index <= currentStep && styles.progressDotActive]}
            />
          ))}
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.icon}>{step.icon}</Text>
          <Text style={styles.title}>{step.title}</Text>
          <Text style={styles.description}>{step.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {isLastStep ? 'Start Free Trial' : 'Next'}
          </Text>
          <ChevronRight color={colors.text} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  content: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  stepIndicator: {
    fontSize: 14,
    color: colors.lightText,
    fontWeight: '500',
  },
  skipButton: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  progressBar: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 48,
  },
  progressDot: {
    flex: 1,
    height: 4,
    backgroundColor: colors.lightText,
    borderRadius: 2,
    opacity: 0.3,
  },
  progressDotActive: {
    opacity: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.lightText,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});
