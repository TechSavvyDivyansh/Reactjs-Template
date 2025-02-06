import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";

// Validation Schema using Zod
const schema = z.object({
  firstName: z.string().min(3, "First Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["female", "male", "other"], {
    message: "Gender is required",
  }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Apply Zod validation
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        
        <Input 
          label="First Name"
          type="text"
          placeholder="Enter your name"
          register={register}
          name="firstName"
          errors={errors.firstName}
        />

        <Input 
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          errors={errors.email}
        />

        <Input 
          label="Gender"
          type="select"
          register={register}
          name="gender"
          errors={errors.gender}
          options={["female", "male", "other"]}
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
