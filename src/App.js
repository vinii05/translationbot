import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("es");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const translateText = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const response = await axios.get("https://api.mymemory.translated.net/get", {
        params: { q: text, langpair: `${fromLang}|${toLang}` },
      });
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      setTranslatedText("Translation Error");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container">
        <h1 className="title">🌸 Translation Bot 🌸</h1>

        <select className="select-box" value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <textarea
          className="text-box"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
        />

        <select className="select-box" value={toLang} onChange={(e) => setToLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button className="button" onClick={translateText} disabled={loading}>
          {loading ? "Translating..." : "💖 Translate 💖"}
        </button>

        {translatedText && (
          <div className="translation-output">
            <strong>✨ Translation ✨</strong>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
