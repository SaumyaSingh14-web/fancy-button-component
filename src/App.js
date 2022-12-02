import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <div className="text-red-500">Hi this is Saumya</div>
      <Button
        type="button"
        onClick={() => console.log("Hi this is button")}
        buttonType="outline"
        theme="primary"
        text="Login"
        className="mt-3 md:mt-0"
        submissionInProgress={false}
      />
    </div>
  );
}

export default App;
