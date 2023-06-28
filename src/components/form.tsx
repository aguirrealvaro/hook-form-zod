import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components";

type Fields = {
  name: string;
  age: number;
  address: number;
  gender: "male" | "female";
};

const Form: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<Fields>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="name">First name:</label>
        <Input id="name" {...register("name")} />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="age">Age:</label>
        <Input id="age" {...register("age")} />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="address">Address:</label>
        <Input id="address" {...register("address")} />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="gender">Gender:</label>
        <select className="rounded border p-2" id="gender" {...register("gender")}>
          <option hidden>Select gender</option>
          <option value="female">male</option>
          <option value="male">male</option>
        </select>
      </div>
      <button type="submit" className="rounded bg-sky-600 p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export { Form };
