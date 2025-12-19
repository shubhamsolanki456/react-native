import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { CheckCircle2, Circle } from 'lucide-react-native';
import { useState } from 'react';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  reward: number;
  icon: string;
}

const SAMPLE_QUESTS: Quest[] = [
  {
    id: '1',
    title: 'Read Daily Shloka',
    description: 'Read and reflect on today\'s Bhagavad Gita verse',
    category: 'wisdom',
    completed: true,
    reward: 100,
    icon: '📿',
  },
  {
    id: '2',
    title: 'Meditation',
    description: 'Complete 15 minutes of meditation',
    category: 'meditation',
    completed: false,
    reward: 150,
    icon: '🧘',
  },
  {
    id: '3',
    title: 'Mantra Jaap',
    description: 'Chant 108 mantras',
    category: 'mantra',
    completed: false,
    reward: 120,
    icon: '🔊',
  },
  {
    id: '4',
    title: 'Gratitude Journal',
    description: 'Write 3 things you\'re grateful for',
    category: 'journal',
    completed: false,
    reward: 80,
    icon: '📔',
  },
  {
    id: '5',
    title: 'Prayer',
    description: 'Spend time in prayer or reflection',
    category: 'prayer',
    completed: false,
    reward: 100,
    icon: '🙏',
  },
];

export default function Quests() {
  const [quests, setQuests] = useState(SAMPLE_QUESTS);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const toggleQuest = (id: string) => {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  const filteredQuests = quests.filter((quest) => {
    if (filter === 'completed') return quest.completed;
    if (filter === 'pending') return !quest.completed;
    return true;
  });

  const completedCount = quests.filter((q) => q.completed).length;
  const totalReward = quests.filter((q) => q.completed).reduce((sum, q) => sum + q.reward, 0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Spiritual Quests</Text>
        <Text style={styles.subtitle}>Build your daily habits</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{completedCount}/{quests.length}</Text>
          <Text style={styles.statLabel}>Completed Today</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{totalReward}</Text>
          <Text style={styles.statLabel}>Experience Earned</Text>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterButtonText, filter === 'all' && styles.filterButtonTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'pending' && styles.filterButtonActive]}
          onPress={() => setFilter('pending')}
        >
          <Text style={[styles.filterButtonText, filter === 'pending' && styles.filterButtonTextActive]}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'completed' && styles.filterButtonActive]}
          onPress={() => setFilter('completed')}
        >
          <Text style={[styles.filterButtonText, filter === 'completed' && styles.filterButtonTextActive]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questsContainer}>
        {filteredQuests.map((quest) => (
          <TouchableOpacity
            key={quest.id}
            style={[styles.questCard, quest.completed && styles.questCardCompleted]}
            onPress={() => toggleQuest(quest.id)}
          >
            <View style={styles.questIcon}>
              <Text style={styles.icon}>{quest.icon}</Text>
              {quest.completed && (
                <CheckCircle2 color={colors.secondary} size={24} style={styles.checkIcon} />
              )}
            </View>

            <View style={styles.questContent}>
              <Text style={[styles.questTitle, quest.completed && styles.questTitleCompleted]}>
                {quest.title}
              </Text>
              <Text style={styles.questDescription}>{quest.description}</Text>
            </View>

            <View style={styles.questReward}>
              <Text style={styles.rewardText}>+{quest.reward}</Text>
              <Text style={styles.rewardLabel}>XP</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightText,
  },
  statsContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.lightText,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 24,
  },
  filterButton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardBg,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.lightText,
  },
  filterButtonTextActive: {
    color: colors.text,
  },
  questsContainer: {
    paddingHorizontal: 24,
    gap: 12,
  },
  questCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  questCardCompleted: {
    opacity: 0.6,
  },
  questIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: 28,
  },
  checkIcon: {
    position: 'absolute',
    right: -8,
    bottom: -8,
  },
  questContent: {
    flex: 1,
  },
  questTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  questTitleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.lightText,
  },
  questDescription: {
    fontSize: 12,
    color: colors.lightText,
  },
  questReward: {
    alignItems: 'center',
    gap: 2,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  rewardLabel: {
    fontSize: 10,
    color: colors.lightText,
  },
});
