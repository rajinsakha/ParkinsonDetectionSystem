import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ParkinsonForm from "@/components/parkinsonForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Heading />
     <ParkinsonForm />
     <Footer />
    </main>
  );
}
