import React from "react";

const TranslationBox = ({ label, value, onChange, isDisabled }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm">{label}</label>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none"
        rows="3"
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default TranslationBox;
