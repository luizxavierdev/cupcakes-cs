import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getTranslations } from "@/config/translations";
import { listOrder } from "@/gateways/order.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { OrderCard } from "./components/order-card";

export default async function Page() {
  const account = cookies().get(CookiesKeys.accountId);
  if (!account) return redirect(`/account/login`);

  const orders = await listOrder(Number(account.value));
  const t = getTranslations("pt"); // Server component - usa português por padrão

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center text-zinc-500">
        <div className="text-5xl mb-4">🧁</div>
        <h2 className="text-xl font-semibold">{t.info.noOrders}</h2>
        <p className="text-sm mt-2">{t.info.exploreCupcakes}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
}
