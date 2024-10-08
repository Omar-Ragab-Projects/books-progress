import AddBook from "@/components/AddBook";
import Books from "@/components/Books";

function Home() {
  return (
    <main className="bg-white p-10 mt-10 rounded-xl max-md:p-3 w-[520px] max-md:w-[350px]">
      <div className="app">
        <AddBook />
        <Books />
      </div>
    </main>
  );
}
export default Home;
