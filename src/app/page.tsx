import { ControlComponent } from "./ui";

export default function Home() {
  return (
    <main className="grid grid-cols-12 min-h-screen bg-white text-black">
      <aside className="col-span-2">
        <ControlComponent />
      </aside>
      <section className="bg-yellow-300 col-span-8">Test</section>
      <aside className="bg-blue-300 col-span-2">Test</aside>
    </main>
  );
}
