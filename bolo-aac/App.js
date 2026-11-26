import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar as RNStatusBar, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import { CARDS, CATEGORIES, CAT_LABEL, LANG_CODE, LANG_NAME, UI } from './cards';

const PER_PAGE = 6; // 2 columns x 3 rows
const BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c]));

export default function App() {
  const [lang, setLangRaw] = useState('hi');
  const [cat, setCat] = useState('core');
  const [page, setPage] = useState(0);
  const [strip, setStrip] = useState([]); // card ids, in tap order

  // Clear the strip on language change: word order differs (मुझे पानी चाहिए vs I want water).
  const setLang = (l) => { setLangRaw(l); setStrip([]); };

  useEffect(() => {
    // Voice check: open the Expo terminal to see which hi/en/bn voices this phone has. Remove after checking.
    Speech.getAvailableVoicesAsync().then((voices) =>
      console.log('voices:', voices.filter((v) => /^(hi|en|bn)/i.test(v.language)).map((v) => `${v.language} ${v.name}`))
    );
  }, []);

  const say = (text) => {
    Speech.stop(); // cut off the previous word so taps never pile up
    Speech.speak(text, { language: LANG_CODE[lang] });
  };

  const inCat = CARDS.filter((c) => c.cat === cat);
  const pages = Math.ceil(inCat.length / PER_PAGE);
  const shown = inCat.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const openCat = (c) => { setCat(c); setPage(0); };
  const tapCard = (card) => { say(card[lang]); setStrip((s) => [...s, card.id]); };
  const speakStrip = () => strip.length && say(strip.map((id) => BY_ID[id][lang]).join(' '));
  const deleteLast = () => setStrip((s) => s.slice(0, -1));

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        {Object.keys(LANG_NAME).map((l) => (
          <Pressable key={l} onPress={() => setLang(l)} style={[styles.chip, lang === l && styles.chipOn]}>
            <Text style={[styles.chipText, lang === l && styles.chipTextOn]}>{LANG_NAME[l]}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs} contentContainerStyle={styles.row}>
        {CATEGORIES.map((c) => (
          <Pressable key={c} onPress={() => openCat(c)} style={[styles.chip, cat === c && styles.chipOn]}>
            <Text style={[styles.chipText, cat === c && styles.chipTextOn]}>{CAT_LABEL[c][lang]}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.strip}>
        <ScrollView horizontal contentContainerStyle={styles.stripWords}>
          {strip.map((id, i) => (
            <View key={i} style={styles.word}>
              <Text style={styles.wordEmoji}>{BY_ID[id].emoji}</Text>
              <Text style={styles.wordText}>{BY_ID[id][lang]}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.row}>
          <Pressable onPress={speakStrip} style={[styles.action, styles.speakBtn]} accessibilityRole="button">
            <Text style={styles.actionText}>🔊 {UI.speak[lang]}</Text>
          </Pressable>
          <Pressable onPress={deleteLast} style={styles.action} accessibilityRole="button">
            <Text style={styles.actionText}>⌫ {UI.del[lang]}</Text>
          </Pressable>
          <Pressable onPress={() => setStrip([])} style={styles.action} accessibilityRole="button">
            <Text style={styles.actionText}>✖ {UI.clear[lang]}</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.grid}>
        {shown.map((card) => (
          <Pressable
            key={card.id}
            onPress={() => tapCard(card)}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            accessibilityRole="button"
            accessibilityLabel={card[lang]}
          >
            <Text style={styles.emoji}>{card.emoji}</Text>
            <Text style={styles.label} numberOfLines={2}>{card[lang]}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.row}>
        <Pressable disabled={page === 0} onPress={() => setPage(page - 1)} style={[styles.navBtn, page === 0 && styles.off]}>
          <Text style={styles.navText}>◀</Text>
        </Pressable>
        <Text style={styles.pageText}>{page + 1} / {pages}</Text>
        <Pressable disabled={page >= pages - 1} onPress={() => setPage(page + 1)} style={[styles.navBtn, page >= pages - 1 && styles.off]}>
          <Text style={styles.navText}>▶</Text>
        </Pressable>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  // ponytail: fixed padding instead of react-native-safe-area-context; install it if a phone's notch/nav bar overlaps.
  screen: { flex: 1, backgroundColor: '#FFF8EE', paddingTop: (RNStatusBar.currentHeight ?? 40) + 8, paddingBottom: 32, paddingHorizontal: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  tabs: { flexGrow: 0, marginVertical: 10 },
  chip: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#fff', borderWidth: 2, borderColor: '#333' },
  chipOn: { backgroundColor: '#333' },
  chipText: { fontSize: 18, color: '#333' },
  chipTextOn: { color: '#fff' },
  strip: { backgroundColor: '#fff', borderRadius: 16, borderWidth: 2, borderColor: '#333', padding: 8, marginBottom: 10, gap: 8 },
  stripWords: { minHeight: 64, alignItems: 'center', gap: 6 },
  word: { alignItems: 'center', backgroundColor: '#FFF3C4', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4 },
  wordEmoji: { fontSize: 24 },
  wordText: { fontSize: 16, color: '#222' },
  action: { flex: 1, paddingVertical: 12, borderRadius: 12, backgroundColor: '#555', alignItems: 'center' },
  speakBtn: { backgroundColor: '#1B7F3B' },
  actionText: { fontSize: 18, color: '#fff', fontWeight: '600' },
  grid: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'flex-start', rowGap: 10 },
  card: { width: '48.5%', height: '31.5%', backgroundColor: '#fff', borderRadius: 16, borderWidth: 3, borderColor: '#333', alignItems: 'center', justifyContent: 'center', padding: 6 },
  cardPressed: { backgroundColor: '#FFE08A' },
  emoji: { fontSize: 56 },
  label: { fontSize: 24, fontWeight: '600', color: '#222', textAlign: 'center' },
  navBtn: { paddingVertical: 12, paddingHorizontal: 28, borderRadius: 12, backgroundColor: '#333', marginTop: 10 },
  navText: { fontSize: 22, color: '#fff' },
  pageText: { fontSize: 18, marginTop: 10, minWidth: 60, textAlign: 'center' },
  off: { opacity: 0.3 },
});
