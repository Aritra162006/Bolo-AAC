// All words live here. To add a card: add one line. Order inside a category = order on screen (6 per page).
// Hindi uses fixed forms (चाहिए, करो, है) so no grammar handling is needed.

export const LANG_CODE = { hi: 'hi-IN', en: 'en-IN', bn: 'bn-IN' };
export const LANG_NAME = { hi: 'हिंदी', en: 'English', bn: 'বাংলা' };

export const CATEGORIES = ['core', 'needs', 'food', 'feelings', 'people', 'places', 'phrases'];
export const CAT_LABEL = {
  core: { hi: 'मुख्य', en: 'Core', bn: 'প্রধান' },
  needs: { hi: 'ज़रूरत', en: 'Needs', bn: 'প্রয়োজন' },
  food: { hi: 'खाना', en: 'Food', bn: 'খাবার' },
  feelings: { hi: 'भावना', en: 'Feelings', bn: 'অনুভূতি' },
  people: { hi: 'लोग', en: 'People', bn: 'মানুষ' },
  places: { hi: 'जगह', en: 'Places', bn: 'জায়গা' },
  phrases: { hi: 'वाक्य', en: 'Phrases', bn: 'বাক্য' },
};

export const CARDS = [
  // core (20) — मुझे and चाहिए stay on page 1
  { id: 'me', cat: 'core', emoji: '🙋', hi: 'मुझे', en: 'I', bn: 'আমার' },
  { id: 'want', cat: 'core', emoji: '🤲', hi: 'चाहिए', en: 'want', bn: 'চাই' },
  { id: 'yes', cat: 'core', emoji: '✅', hi: 'हाँ', en: 'yes', bn: 'হ্যাঁ' },
  { id: 'no', cat: 'core', emoji: '❌', hi: 'नहीं', en: 'no', bn: 'না' },
  { id: 'more', cat: 'core', emoji: '➕', hi: 'और', en: 'more', bn: 'আরও' },
  { id: 'stop', cat: 'core', emoji: '✋', hi: 'रुको', en: 'stop', bn: 'থামো' },
  { id: 'help', cat: 'core', emoji: '🆘', hi: 'मदद करो', en: 'help', bn: 'সাহায্য করো' },
  { id: 'go', cat: 'core', emoji: '🚶', hi: 'चलो', en: 'go', bn: 'চলো' },
  { id: 'come', cat: 'core', emoji: '👋', hi: 'आओ', en: 'come', bn: 'এসো' },
  { id: 'give', cat: 'core', emoji: '🎁', hi: 'दो', en: 'give', bn: 'দাও' },
  { id: 'eat', cat: 'core', emoji: '🍽️', hi: 'खाना है', en: 'eat', bn: 'খাব' },
  { id: 'drink', cat: 'core', emoji: '🥤', hi: 'पीना है', en: 'drink', bn: 'পান করব' },
  { id: 'like', cat: 'core', emoji: '❤️', hi: 'पसंद है', en: 'like', bn: 'ভালো লাগে' },
  { id: 'dislike', cat: 'core', emoji: '👎', hi: 'पसंद नहीं', en: "don't like", bn: 'ভালো লাগে না' },
  { id: 'you', cat: 'core', emoji: '🧑', hi: 'आप', en: 'you', bn: 'তুমি' },
  { id: 'this', cat: 'core', emoji: '👇', hi: 'यह', en: 'this', bn: 'এটা' },
  { id: 'there', cat: 'core', emoji: '📍', hi: 'वहाँ', en: 'there', bn: 'ওখানে' },
  { id: 'now', cat: 'core', emoji: '⏰', hi: 'अभी', en: 'now', bn: 'এখন' },
  { id: 'later', cat: 'core', emoji: '⏳', hi: 'बाद में', en: 'later', bn: 'পরে' },
  { id: 'good', cat: 'core', emoji: '👍', hi: 'अच्छा', en: 'good', bn: 'ভালো' },

  // needs (6)
  { id: 'toilet', cat: 'needs', emoji: '🚽', hi: 'शौचालय', en: 'toilet', bn: 'শৌচাগার' },
  { id: 'sleep', cat: 'needs', emoji: '😴', hi: 'सोना है', en: 'sleep', bn: 'ঘুমাব' },
  { id: 'bath', cat: 'needs', emoji: '🛁', hi: 'नहाना है', en: 'bath', bn: 'স্নান করব' },
  { id: 'medicine', cat: 'needs', emoji: '💊', hi: 'दवाई', en: 'medicine', bn: 'ওষুধ' },
  { id: 'pain', cat: 'needs', emoji: '🤕', hi: 'दर्द', en: 'pain', bn: 'ব্যথা' },
  { id: 'clothes', cat: 'needs', emoji: '👕', hi: 'कपड़े', en: 'clothes', bn: 'জামাকাপড়' },

  // food (6) — पानी on page 1
  { id: 'water', cat: 'food', emoji: '💧', hi: 'पानी', en: 'water', bn: 'জল' },
  { id: 'food', cat: 'food', emoji: '🍛', hi: 'खाना', en: 'food', bn: 'খাবার' },
  { id: 'milk', cat: 'food', emoji: '🥛', hi: 'दूध', en: 'milk', bn: 'দুধ' },
  { id: 'tea', cat: 'food', emoji: '☕', hi: 'चाय', en: 'tea', bn: 'চা' },
  { id: 'fruit', cat: 'food', emoji: '🍎', hi: 'फल', en: 'fruit', bn: 'ফল' },
  { id: 'biscuit', cat: 'food', emoji: '🍪', hi: 'बिस्किट', en: 'biscuit', bn: 'বিস্কুট' },

  // feelings (6)
  { id: 'happy', cat: 'feelings', emoji: '😊', hi: 'खुश', en: 'happy', bn: 'খুশি' },
  { id: 'sad', cat: 'feelings', emoji: '😢', hi: 'दुखी', en: 'sad', bn: 'দুঃখী' },
  { id: 'angry', cat: 'feelings', emoji: '😠', hi: 'गुस्सा', en: 'angry', bn: 'রাগ' },
  { id: 'scared', cat: 'feelings', emoji: '😨', hi: 'डर', en: 'scared', bn: 'ভয়' },
  { id: 'tired', cat: 'feelings', emoji: '😩', hi: 'थकान', en: 'tired', bn: 'ক্লান্ত' },
  { id: 'sick', cat: 'feelings', emoji: '🤒', hi: 'बीमार', en: 'sick', bn: 'অসুস্থ' },

  // people (6)
  { id: 'mother', cat: 'people', emoji: '👩', hi: 'माँ', en: 'mother', bn: 'মা' },
  { id: 'father', cat: 'people', emoji: '👨', hi: 'पापा', en: 'father', bn: 'বাবা' },
  { id: 'brother', cat: 'people', emoji: '👦', hi: 'भाई', en: 'brother', bn: 'ভাই' },
  { id: 'sister', cat: 'people', emoji: '👧', hi: 'बहन', en: 'sister', bn: 'বোন' },
  { id: 'doctor', cat: 'people', emoji: '🩺', hi: 'डॉक्टर', en: 'doctor', bn: 'ডাক্তার' },
  { id: 'teacher', cat: 'people', emoji: '📚', hi: 'टीचर', en: 'teacher', bn: 'শিক্ষক' },

  // places (6)
  { id: 'home', cat: 'places', emoji: '🏠', hi: 'घर', en: 'home', bn: 'বাড়ি' },
  { id: 'school', cat: 'places', emoji: '🏫', hi: 'स्कूल', en: 'school', bn: 'স্কুল' },
  { id: 'hospital', cat: 'places', emoji: '🏥', hi: 'अस्पताल', en: 'hospital', bn: 'হাসপাতাল' },
  { id: 'outside', cat: 'places', emoji: '🌳', hi: 'बाहर', en: 'outside', bn: 'বাইরে' },
  { id: 'bed', cat: 'places', emoji: '🛏️', hi: 'बिस्तर', en: 'bed', bn: 'বিছানা' },
  { id: 'park', cat: 'places', emoji: '🎠', hi: 'पार्क', en: 'park', bn: 'পার্ক' },

  // phrases (10) — whole sentences in one tap
  { id: 'p_hello', cat: 'phrases', emoji: '🙏', hi: 'नमस्ते', en: 'hello', bn: 'নমস্কার' },
  { id: 'p_thanks', cat: 'phrases', emoji: '💐', hi: 'धन्यवाद', en: 'thank you', bn: 'ধন্যবাদ' },
  { id: 'p_hungry', cat: 'phrases', emoji: '🍽️', hi: 'मुझे भूख लगी है', en: 'I am hungry', bn: 'আমার খিদে পেয়েছে' },
  { id: 'p_thirsty', cat: 'phrases', emoji: '🥤', hi: 'मुझे प्यास लगी है', en: 'I am thirsty', bn: 'আমার তেষ্টা পেয়েছে' },
  { id: 'p_toilet', cat: 'phrases', emoji: '🚻', hi: 'मुझे शौचालय जाना है', en: 'I need the toilet', bn: 'আমি শৌচাগারে যাব' },
  { id: 'p_pain', cat: 'phrases', emoji: '😣', hi: 'मुझे दर्द हो रहा है', en: 'I am in pain', bn: 'আমার ব্যথা করছে' },
  { id: 'p_help', cat: 'phrases', emoji: '🙋', hi: 'कृपया मेरी मदद करो', en: 'please help me', bn: 'দয়া করে আমাকে সাহায্য করো' },
  { id: 'p_sleepy', cat: 'phrases', emoji: '🛌', hi: 'मुझे नींद आ रही है', en: 'I feel sleepy', bn: 'আমার ঘুম পাচ্ছে' },
  { id: 'p_home', cat: 'phrases', emoji: '🏡', hi: 'मुझे घर जाना है', en: 'I want to go home', bn: 'আমি বাড়ি যাব' },
  { id: 'p_cold', cat: 'phrases', emoji: '🥶', hi: 'मुझे ठंड लग रही है', en: 'I feel cold', bn: 'আমার ঠান্ডা লাগছে' },
];
