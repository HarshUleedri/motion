import { SuccessSequenceButton } from "./component/SuccessSequenceButton";

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgb(6,182,212,0.2) 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="bg-neutral-950 min-h-screen w-full flex items-center justify-center  mx-auto"
    >
      <SuccessSequenceButton text={"Process To payment"} style={""} />
    </div>
  );
};

export default App;
