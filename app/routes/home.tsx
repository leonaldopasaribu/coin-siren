import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Footer from "~/components/footer";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)]">
      <Header />
      <Welcome />
      <Footer />
    </main>
  );
}
