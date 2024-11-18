import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function EnquiryForm({
  isProductInput = true,
  product = "",
  isProductDisabled = false,
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      product: product,
      company: "",
    },
  });

  async function handleQuery(inputs) {
    return;
  }

  const onSubmit = async (data) => {
    handleQuery(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center flex-col gap-4 w-full"
    >
      <div className="input-group">
        <input
          required
          type="text"
          {...register("name", {
            required: "required*",
          })}
          autoComplete="off"
          className="input"
        />
        <label className="user-label">Full Name</label>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
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

      {isProductInput && (
        <div className="input-group">
          <input
            required
            type="text"
            {...register("product", {
              required: "required*",
            })}
            autoComplete="off"
            className="input"
            disabled={isProductDisabled}
          />
          <label className="user-label">Product</label>
          {errors.product && (
            <span className="text-red-500">{errors.product.message}</span>
          )}
        </div>
      )}

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

      <button type="submit" name="submit" className="btn-primary">
        Send Enquiry
      </button>
    </form>
  );
}
