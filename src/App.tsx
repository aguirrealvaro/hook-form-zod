import { FunctionComponent } from "react";
import "@/styles/globals.css";
import { Form, Wrapper } from "@/components";

const App: FunctionComponent = () => {
  return (
    <div className="my-8">
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  );
};

export default App;
