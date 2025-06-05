import React from "react";

const LanguageSelector = ({ selectedLang, onChange, label }) => {
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  return (
    <div className="mb-2">
      <label className="block text-gray-600 text-sm">{label}</label>
      <select
        className="w-full p-2 border rounded-md focus:outline-none"
        value={selectedLang}
        onChange={(e) => onChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
