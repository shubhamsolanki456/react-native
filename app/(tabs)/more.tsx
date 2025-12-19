import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

const colors = {
  primary: '#8B5CF6',
  secondary: '#EC4899',
  dark: '#1A1A1A',
  text: '#FFFFFF',
  lightText: '#A0A0A0',
  cardBg: '#2A2A2A',
  border: '#3A3A3A',
};

interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  screen: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'meditation',
    title: 'Meditation',
    description: 'Guided meditation sessions',
    icon: '🧘',
    screen: '/(modals)/meditation',
  },
  {
    id: 'mantra',
    title: 'Mantra Jaap',
    description: 'Mantra counter & tracking',
    icon: '📿',
    screen: '/(modals)/mantra-jaap',
  },
  {
    id: 'journal',
    title: 'Spiritual Journal',
    description: 'Write & reflect on your journey',
    icon: '📔',
    screen: '/(modals)/journal',
  },
  {
    id: 'ai-guide',
    title: 'AI Scripture Guide',
    description: 'Get AI insights on sacred texts',
    icon: '✨',
    screen: '/(modals)/ai-guide',
  },
  {
    id: 'prayers',
    title: 'Prayers',
    description: 'Prayer scheduler & reminders',
    icon: '🙏',
    screen: '/(modals)/prayers',
  },
  {
    id: 'manifestation',
    title: 'Manifestation',
    description: 'Manifestation board',
    icon: '💫',
    screen: '/(modals)/manifestation',
  },
  {
    id: 'voice-log',
    title: 'Voice Logs',
    description: 'Record spiritual insights',
    icon: '🎙️',
    screen: '/(modals)/voice-log',
  },
  {
    id: 'sin-log',
    title: 'Karma Tracker',
    description: 'Track your karma journey',
    icon: '⚖️',
    screen: '/(modals)/sin-log',
  },
];

const SETTINGS_ITEMS: MenuItem[] = [
  {
    id: 'pricing',
    title: 'Premium Plans',
    description: 'Upgrade to premium',
    icon: '👑',
    screen: '/(modals)/pricing',
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'App preferences & notifications',
    icon: '⚙️',
    screen: '/(modals)/settings',
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    description: 'View our privacy policy',
    icon: '🔒',
    screen: '/(modals)/privacy-policy',
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    description: 'View our terms',
    icon: '📋',
    screen: '/(modals)/terms-of-service',
  },
];

export default function More() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(screen as any);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>More Features</Text>
        <Text style={styles.subtitle}>Explore additional spiritual tools</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spiritual Tools</Text>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigate(item.screen)}
          >
            <View style={styles.menuItemIcon}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
            </View>
            <ChevronRight color={colors.lightText} size={20} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account & Legal</Text>
        {SETTINGS_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigate(item.screen)}
          >
            <View style={styles.menuItemIcon}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
            </View>
            <ChevronRight color={colors.lightText} size={20} />
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  menuItemIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  menuItemDescription: {
    fontSize: 12,
    color: colors.lightText,
  },
});
