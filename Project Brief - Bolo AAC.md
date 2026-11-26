# Project Brief: Bolo AAC | v1 | 2026-11-26

## Goal
Non-verbal people with motor, intellectual or sensory deficits tap or switch-scan picture cards on an Android phone, and the phone speaks their need in Hindi, English or Bengali.

## Why
ISD mobile-dev project on SIH problem statement 197 (AAC in Indian context, MoSJE). Low-cost alternative to imported AAC (Rs 50,000+): free app on a phone the family already owns. Mobile only, no hardware allowed. Deadline: 29 Nov 2026 (3 days from start).

## Scope
**Must**
1. ~60 cards: ~20 core words, ~30 fringe words in 5 categories (needs, food, feelings, people, places), ~10 quick phrases. Large cards, 2x3 per screen.
2. Tap card -> speaks (expo-speech, hi-IN / en-IN / bn-IN).
3. Sentence strip: add cards, speak whole sentence, remove last.
4. Scanning mode: highlight moves every N seconds (adjustable); tap anywhere on screen selects; card name spoken softly on highlight (auditory scanning).
5. Language toggle, saved with AsyncStorage.

**Later (future-scope slide)**
Custom photo cards with recorded voice; Bluetooth switch; grammar-aware sentences (gender/tense); word prediction; therapist usage log; more languages.

**Not doing**
Login, backend, cloud sync, ML, hardware.

**How to know it works (done list)**
- APK installs on a real Android phone and runs offline.
- "मुझे पानी चाहिए" can be built and spoken in scanning mode using only full-screen taps.
- Every card speaks in Hindi and English; Bengali checked on the demo phone (drop if no voice).
- Language and scan speed survive an app restart.
- README: what it does, install, usage, limits. Backup demo video recorded.

## Stack and repo
Expo SDK 58 (React Native), expo-speech, @react-native-async-storage/async-storage, Expo Go for testing, EAS Build for APK. Icons: emoji / OpenMoji.
Repo: not created yet.
Run: `npx expo start` -> scan QR in Expo Go. APK: `eas build -p android --profile preview`.

## Decisions
- 2026-11-26: Chose PS 197 (AAC): simplest mobile-only statement with a real user need.
- 2026-11-26: Phone = the low-cost device; hardware switch moved to Later (college allows mobile only).
- 2026-11-26: Core-vocabulary approach, ~60 cards, fixed Hindi forms (चाहिए, करो) to avoid grammar handling.
- 2026-11-26: Working name "Bolo"; can change.

## References
None.

## Status
Done: problem statement chosen, scope set.
In progress: nothing.
Blocked: nothing.

## Next step
Day 1: `npx create-expo-app@latest bolo-aac`, install expo-speech, write cards.js, build the large-card grid where tap speaks; test Hindi + Bengali voices on the phone today.

## Risks
1. Bengali TTS voice missing on the demo phone -> demo Hindi + English only.
2. EAS build queue slow -> start build on morning of Day 3; Expo Go demo as fallback.
3. Judges call it "talking flashcards" -> sentence strip + scanning mode are mandatory, lead demo with a user scenario.
