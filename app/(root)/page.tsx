import Hello from "@/components/hello";

const Home = () => {
  console.log("what type of comp am i");
  return (
    <>
      <Hello />
      <div>its the homepage</div>
    </>
  );
};

export default Home;
