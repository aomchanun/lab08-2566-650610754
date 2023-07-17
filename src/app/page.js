import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Task } from "../../components/task";
import { Taskinput } from "../../components/taskinput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Chanuntorn Chiangpuan"
        studentId="650610754"
      />
    </div>
  );
}
