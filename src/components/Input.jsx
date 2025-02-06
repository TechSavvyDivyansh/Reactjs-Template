import React from "react";

export default function Input({ label, type, placeholder, register, name, errors, options }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-white">{label}</label>}
      
      {type === "select" ? (
        <select {...register(name)} className="border p-2 rounded-lg">
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="border p-2 rounded-lg"
        />
      )}

      {errors && <p className="text-red-500">{errors.message}</p>}
    </div>
  );
}
