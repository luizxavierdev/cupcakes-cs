import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { listOrder } from "@/gateways/order.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { OrderCard } from "./components/order-card";

export default async function Page() {
  const account = cookies().get(CookiesKeys.accountId);
  if (!account) return redirect(`/account/login`);

  const orders = await listOrder(Number(account.value));

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center text-zinc-500">
        <div className="text-5xl mb-4">🧁</div>
        <h2 className="text-xl font-semibold">{"You haven't placed any orders yet"}</h2>
        <p className="text-sm mt-2">Explore our cupcakes and make your first purchase!!</p>
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
