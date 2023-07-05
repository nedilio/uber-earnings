import Form from "@/components/Form";

const Earning = () => {
  return (
    <div>
      <Form
        baseURL={process.env.API_BASE_URL ? process.env.API_BASE_URL : ""}
      />
    </div>
  );
};

export default Earning;
