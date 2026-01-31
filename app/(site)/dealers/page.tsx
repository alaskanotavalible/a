import DealersClient from "./DealersClient";
import { pageMeta } from "@/lib/seo";

// Серверный компонент — можно экспортировать metadata
export const metadata = pageMeta({
  title: "Для дилеров / партнёров",
  description:
    "Страница для партнёров Tengri Thermo: условия, прайс, поддержка продаж и проектные поставки в Казахстане.",
  urlPath: "/dealers",
});

export default function Page() {
  return <DealersClient />;
}
