import { FunctionComponent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components";

const validationSchema = z.object({
  name: z.string().min(1, { message: "Required field" }),
  age: z.number().min(18, { message: "Min 18" }).max(70, { message: "Max 70" }),
  address: z.string().min(1, { message: "Required field" }),
  dni: z.number().min(8, { message: "length" }).max(8, { message: "8 length" }),
  gender: z.enum(["male", "female"]),
  email: z.string().min(1, { message: "Required field" }).email({ message: "Invalid email" }),
});

type Fields = z.infer<typeof validationSchema>;

const Zod: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Fields>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: "" },
  });
  const onSubmit: SubmitHandler<Fields> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const resetFields = () => {
    reset();
  };

  const address = watch("address");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="name">First name:</label>
          <Input id="name" {...register("name")} />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="age">Age:</label>
          <Input id="age" {...register("age", { valueAsNumber: true })} />
          {errors.age && <span className="text-red-500">{errors.age.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="address">Address:</label>
          <Input id="address" {...register("address")} />
          {errors.address && <span className="text-red-500">{errors.address.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="gender">Gender:</label>
          <select className="rounded border p-2" id="gender" {...register("gender")}>
            <option hidden>Select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="dni">DNI:</label>
          <Input id="dni" {...register("dni", { valueAsNumber: true })} />
          {errors.dni && <span className="text-red-500">{errors.dni.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <Input id="email" {...register("email")} />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <button onClick={resetFields}>reset fields</button>
        <button type="submit" className="rounded bg-sky-600 p-2 text-white">
          Submit
        </button>
      </form>
      <div className="mt-8">
        <span>Watcher address: {address}</span>
      </div>
    </div>
  );
};

export { Zod };
