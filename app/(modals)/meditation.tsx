import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { X, Play, Pause } from 'lucide-react-native';
import { useState, useEffect } from 'react';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

const MEDITATIONS = [
  {
    id: 1,
    title: 'Morning Gratitude',
    duration: 10,
    description: 'Start your day with gratitude and positive energy',
  },
  {
    id: 2,
    title: 'Evening Peace',
    duration: 15,
    description: 'Wind down and find inner peace',
  },
  {
    id: 3,
    title: 'Deep Breathing',
    duration: 5,
    description: 'Quick breathing exercise',
  },
];

export default function Meditation() {
  const router = useRouter();
  const [selectedMeditation, setSelectedMeditation] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeLeft]);

  const handleStartMeditation = (meditation: any) => {
    setSelectedMeditation(meditation.id);
    setTimeLeft(meditation.duration * 60);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (selectedMeditation) {
    const meditation = MEDITATIONS.find((m) => m.id === selectedMeditation);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedMeditation(null)}>
            <X color={colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Meditation</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.meditationContent}>
          <View style={styles.timerCircle}>
            <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
            <Text style={styles.meditationName}>{meditation?.title}</Text>
          </View>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause color={colors.text} size={32} />
            ) : (
              <Play color={colors.text} size={32} />
            )}
          </TouchableOpacity>

          <Text style={styles.instructions}>
            Find a quiet place, sit comfortably, and focus on your breath
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meditation</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Guided Meditations</Text>
        <Text style={styles.subtitle}>Find peace and tranquility</Text>

        <View style={styles.meditationsList}>
          {MEDITATIONS.map((meditation) => (
            <TouchableOpacity
              key={meditation.id}
              style={styles.meditationCard}
              onPress={() => handleStartMeditation(meditation)}
            >
              <Text style={styles.meditationIcon}>🧘</Text>
              <View style={styles.meditationInfo}>
                <Text style={styles.meditationTitle}>{meditation.title}</Text>
                <Text style={styles.meditationDesc}>{meditation.description}</Text>
              </View>
              <Text style={styles.meditationDuration}>{meditation.duration}m</Text>
            </TouchableOpacity>
          ))}
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
  meditationsList: {
    gap: 12,
  },
  meditationCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  meditationIcon: {
    fontSize: 32,
  },
  meditationInfo: {
    flex: 1,
  },
  meditationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  meditationDesc: {
    fontSize: 12,
    color: colors.lightText,
  },
  meditationDuration: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  meditationContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  timerCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.primary,
    marginBottom: 40,
  },
  timer: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.primary,
  },
  meditationName: {
    fontSize: 16,
    color: colors.lightText,
    marginTop: 16,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  instructions: {
    fontSize: 14,
    color: colors.lightText,
    textAlign: 'center',
    lineHeight: 20,
  },
});
