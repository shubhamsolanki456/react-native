import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { X, Plus, Minus } from 'lucide-react-native';
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

export default function MantraJaap() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [selectedMantra, setSelectedMantra] = useState(0);

  const MANTRAS = [
    { id: 0, name: 'Om Namah Shivaya', target: 108 },
    { id: 1, name: 'Hare Krishna Mantra', target: 108 },
    { id: 2, name: 'Om Mani Padme Hum', target: 108 },
    { id: 3, name: 'Gayatri Mantra', target: 108 },
  ];

  const currentMantra = MANTRAS[selectedMantra];
  const progress = (count / currentMantra.target) * 100;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mantra Jaap</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Mantra Counter</Text>

        <View style={styles.mantraCard}>
          <Text style={styles.mantraName}>{currentMantra.name}</Text>

          <View style={styles.counterCircle}>
            <Text style={styles.counterText}>{count}</Text>
            <Text style={styles.targetText}>of {currentMantra.target}</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCount(Math.max(0, count - 1))}
            >
              <Minus color={colors.text} size={24} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={() => setCount(count + 1)}
            >
              <Plus color={colors.text} size={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => setCount(0)}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Choose Mantra</Text>
        <View style={styles.mantrasList}>
          {MANTRAS.map((mantra) => (
            <TouchableOpacity
              key={mantra.id}
              style={[
                styles.mantraOption,
                selectedMantra === mantra.id && styles.mantraOptionActive,
              ]}
              onPress={() => {
                setSelectedMantra(mantra.id);
                setCount(0);
              }}
            >
              <Text
                style={[
                  styles.mantraOptionText,
                  selectedMantra === mantra.id && styles.mantraOptionTextActive,
                ]}
              >
                {mantra.name}
              </Text>
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
    marginBottom: 32,
  },
  mantraCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  mantraName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  counterCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  counterText: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.primary,
  },
  targetText: {
    fontSize: 14,
    color: colors.lightText,
    marginTop: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 24,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.cardBg,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  resetButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    color: colors.lightText,
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  mantrasList: {
    gap: 8,
  },
  mantraOption: {
    backgroundColor: colors.cardBg,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  mantraOptionActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  mantraOptionText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  mantraOptionTextActive: {
    color: '#1A1A1A',
    fontWeight: '600',
  },
});
