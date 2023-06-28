import { FunctionComponent } from "react";
import { Input } from "@/components";

const Form: FunctionComponent = () => {
  return (
    <form>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="name">First name:</label>
        <Input id="name" />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="age">Age:</label>
        <Input id="age" />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="address">Address:</label>
        <Input id="address" />
      </div>
      <button type="submit" className="rounded bg-sky-600 p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export { Form };
