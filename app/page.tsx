import Background from "@/components/background/Background";
import Header from "@/components/header/Header";
import WidgetBoard from "@/components/widget-board/WidgetBoard";

export default function Home() {
  return (
    <main className="w-full h-screen max-h-screen overflow-hidden flex flex-col">
      <Background />
      <Header />
      <WidgetBoard />
    </main>
  );
}
