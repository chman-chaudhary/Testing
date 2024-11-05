import { Form } from "./Form";

export const Main = () => {
  return (
    <div className="h-full w-[95%] lg:w-[75vw] border broder-black flex my-2">
      <div className="w-[45%] bg-gradient-to-r from-cyan-400 to-green-400 text-transparent hidden md:block">
        x
      </div>
      <Form />
    </div>
  );
};
