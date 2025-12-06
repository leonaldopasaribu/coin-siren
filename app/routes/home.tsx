import type { Route } from "./+types/home";

import Footer from "~/components/footer";
import Header from "~/components/header";
import Hero from "~/components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coin Siren" },
    { name: "description", content: "Coin Siren" },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)]">
        <Header />
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
