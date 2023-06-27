import Donut from "@/components/Donut";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Donut />
        <Test />
      </main>
    </>
  );
}
