import { FunctionComponent } from "react";
import "@/styles/globals.css";
import { Wrapper, Zod } from "@/components";

const App: FunctionComponent = () => {
  return (
    <div className="my-8">
      <Wrapper>
        {/* <Form /> */}
        <Zod />
      </Wrapper>
    </div>
  );
};

export default App;
