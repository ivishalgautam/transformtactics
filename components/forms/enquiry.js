import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function EnquiryForm({}) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      number: "",
      email: "",
      message: "",
      company: "",
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!(await trigger())) return;

    const formData = new FormData(event.target);
    setLoading(true);
    try {
      const response = await fetch("/api/email/send", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4 w-full">
        <div className="input-group">
          <input
            required
            type="text"
            {...register("fullname", {
              required: "required*",
            })}
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Full Name</label>
          {errors.fullname && (
            <span className="text-red-500">{errors.fullname.message}</span>
          )}
        </div>

        <div className="input-group">
          <input
            required
            type="tel"
            {...register("number", {
              required: "required*",
            })}
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Phone</label>
          {errors.number && (
            <span className="text-red-500">{errors.number.message}</span>
          )}
        </div>

        <div className="input-group">
          <input
            required
            type="email"
            {...register("email", {
              required: "required*",
            })}
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Email</label>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="input-group">
          <input
            required
            type="text"
            {...register("company", {
              required: "required*",
            })}
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Company</label>
          {errors.company && (
            <span className="text-red-500">{errors.company.message}</span>
          )}
        </div>

        <div className="input-group sm:col-span-2">
          <textarea
            required
            type="text"
            {...register("message", {
              required: "required*",
            })}
            autoComplete="off"
            className="input min-h-[150px]"
          />
          <label className="user-label">Message</label>
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
      </div>
      <button
        disabled={loading}
        type="submit"
        name="submit"
        className="btn-primary mt-4"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
