import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useAuth } from '@/hooks/useAuth';
import { Flame, Star, TrendingUp } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

const { width } = Dimensions.get('window');

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome, {user?.email?.split('@')[0] || 'Seeker'}</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.streakContainer}>
        <View style={styles.streakCard}>
          <Flame color={colors.secondary} size={40} />
          <View style={styles.streakContent}>
            <Text style={styles.streakNumber}>7</Text>
            <Text style={styles.streakLabel}>Day Streak</Text>
          </View>
        </View>

        <View style={styles.streakCard}>
          <Star color={colors.primary} size={40} />
          <View style={styles.streakContent}>
            <Text style={styles.streakNumber}>3,450</Text>
            <Text style={styles.streakLabel}>Experience</Text>
          </View>
        </View>

        <View style={styles.streakCard}>
          <TrendingUp color={colors.secondary} size={40} />
          <View style={styles.streakContent}>
            <Text style={styles.streakNumber}>Level 5</Text>
            <Text style={styles.streakLabel}>Spiritual</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Daily Shloka</Text>
            <Text style={styles.taskStatus}>Pending</Text>
          </View>
          <Text style={styles.taskDescription}>Read today's Bhagavad Gita verse</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Meditation</Text>
            <Text style={styles.taskStatus}>Pending</Text>
          </View>
          <Text style={styles.taskDescription}>15 minutes meditation session</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
        </View>

        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Mantra Jaap</Text>
            <Text style={styles.taskStatus}>Pending</Text>
          </View>
          <Text style={styles.taskDescription}>Chant 108 mantras</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickCardIcon}>🧘</Text>
          <Text style={styles.quickCardTitle}>Meditation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickCardIcon}>📿</Text>
          <Text style={styles.quickCardTitle}>Mantra Jaap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickCardIcon}>📔</Text>
          <Text style={styles.quickCardTitle}>Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickCardIcon}>💬</Text>
          <Text style={styles.quickCardTitle}>AI Guide</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  header: {
    padding: 24,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: colors.lightText,
  },
  streakContainer: {
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 32,
  },
  streakCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  streakContent: {
    flex: 1,
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  streakLabel: {
    fontSize: 12,
    color: colors.lightText,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  taskCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  taskStatus: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '500',
  },
  taskDescription: {
    fontSize: 13,
    color: colors.lightText,
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#4A4A4A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  quickCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  quickCardIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});
