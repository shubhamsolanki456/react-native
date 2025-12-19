import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Share2, Heart, Bookmark } from 'lucide-react-native';
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

const SAMPLE_SHLOKAS = [
  {
    id: 1,
    chapter: 2,
    verse: 47,
    text: 'Yogasthah Kuru Karmani Sangam Tyaktva Dhananjaya, Siddhyasiddhyoh Samo Bhutva, Samatvam Yoga Ucyate',
    translation:
      'Perform your obligatory duty, because action is indeed better than inaction. Even the maintenance of your body cannot be accomplished by inaction.',
    meaning:
      'Lord Krishna emphasizes the importance of performing ones duty without being attached to success or failure. True yoga is achieving equilibrium in all circumstances.',
  },
];

export default function DailyShlok() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const shloka = SAMPLE_SHLOKAS[0];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Wisdom</Text>
        <Text style={styles.date}>Bhagavad Gita {shloka.chapter}.{shloka.verse}</Text>
      </View>

      <View style={styles.shlokaCard}>
        <Text style={styles.shlokaText}>{shloka.text}</Text>

        <View style={styles.divider} />

        <View style={styles.translationContainer}>
          <Text style={styles.translationLabel}>Translation</Text>
          <Text style={styles.translationText}>{shloka.translation}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.meaningContainer}>
          <Text style={styles.meaningLabel}>Meaning</Text>
          <Text style={styles.meaningText}>{shloka.meaning}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, liked && styles.actionButtonActive]}
          onPress={() => setLiked(!liked)}
        >
          <Heart color={liked ? colors.secondary : colors.lightText} size={24} />
          <Text style={[styles.actionButtonText, liked && styles.actionButtonTextActive]}>
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, bookmarked && styles.actionButtonActive]}
          onPress={() => setBookmarked(!bookmarked)}
        >
          <Bookmark color={bookmarked ? colors.primary : colors.lightText} size={24} />
          <Text style={[styles.actionButtonText, bookmarked && styles.actionButtonTextActive]}>
            Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Share2 color={colors.lightText} size={24} />
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reflection</Text>
        <View style={styles.reflectionBox}>
          <Text style={styles.reflectionPlaceholder}>Write your thoughts about this verse...</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Related Shlokas</Text>
        <View style={styles.relatedCard}>
          <Text style={styles.relatedTitle}>Bhagavad Gita 2.50</Text>
          <Text style={styles.relatedText}>
            Buddhiyukto jahatih iha ubhe sukritaduskrite | Tasmad yogaya yujyasva yoga upyate siddham Varisam
          </Text>
        </View>
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
  date: {
    fontSize: 14,
    color: colors.lightText,
  },
  shlokaCard: {
    marginHorizontal: 24,
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  shlokaText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  translationContainer: {
    marginBottom: 16,
  },
  translationLabel: {
    fontSize: 12,
    color: colors.lightText,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 8,
  },
  translationText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  meaningContainer: {},
  meaningLabel: {
    fontSize: 12,
    color: colors.lightText,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 8,
  },
  meaningText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionButtonActive: {
    borderColor: colors.primary,
    backgroundColor: '#1A1A1A',
  },
  actionButtonText: {
    fontSize: 12,
    color: colors.lightText,
    fontWeight: '600',
  },
  actionButtonTextActive: {
    color: colors.primary,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  reflectionBox: {
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    padding: 16,
    minHeight: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  reflectionPlaceholder: {
    color: colors.lightText,
    fontSize: 14,
    lineHeight: 20,
  },
  relatedCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
  relatedText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
});
