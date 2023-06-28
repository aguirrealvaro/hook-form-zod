import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components";

type Fields = {
  name: string;
  age: number;
  address: number;
  gender: "male" | "female";
  dni: number;
};

const Form: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Fields>({ defaultValues: { name: "Alvaro" } });
  const onSubmit: SubmitHandler<Fields> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const address = watch("address");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="name">First name:</label>
          <Input
            id="name"
            {...register("name", { required: { value: true, message: "Required field" } })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="age">Age:</label>
          <Input
            id="age"
            {...register("age", {
              required: { value: true, message: "Required field" },
              min: { value: 18, message: "Min: 18" },
              max: { value: 70, message: "Max: 70" },
            })}
          />
          {errors.age && <span className="text-red-500">{errors.age.message}</span>}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="address">Address:</label>
          <Input id="address" {...register("address")} />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="gender">Gender:</label>
          <select className="rounded border p-2" id="gender" {...register("gender")}>
            <option hidden>Select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="dni">DNI:</label>
          <Input id="dni" {...register("dni")} />
        </div>
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

export { Form };
