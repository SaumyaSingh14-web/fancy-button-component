import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="p-5">
      <form className="space-y-2">
        <div>
          <Input placeholder="Enter text" />
        </div>
        <Button
          type="submit"
          onClick={() => console.log("Hi this is submit button")}
          buttonType="solid"
          theme="primary"
          text="Submit"
          className="mt-3 md:mt-0"
        />
      </form>
      <form className="mt-5 space-y-2">
        <div>
          <Input placeholder="Enter text" />
        </div>
        <Button
          type="reset"
          buttonType="outline"
          theme="primary"
          text="Reset"
          className="mt-3 md:mt-0"
        />
      </form>

      <div className="mt-5 space-y-2">
        <div className="space-x-2">
          <Input placeholder="Enter first number" />
          <Input placeholder="Enter second number" />
        </div>
        <Button
          type="button"
          buttonType="solid"
          theme="warning"
          text="+Add"
          className="mt-3 md:mt-0"
        />
      </div>
    </div>
  );
}

export default App;
