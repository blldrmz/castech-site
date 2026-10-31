import { pageMeta } from "@/lib/seo";
import { ContactView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Контакты | Запрос предложения на оборудование для казино",
  "Запросите предложение на оборудование для казино у CasTech EQ. Офис в Батуми (Грузия) для клиентов из Грузии и стран СНГ, юридический адрес в Праге.",
  "/contact/",
  "ru",
);

export default function RuContactPage() {
  return <ContactView srTitle="Контакты CasTech EQ" locale="ru" />;
}
