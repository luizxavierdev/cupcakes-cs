"use client";
import { useContext, useEffect, useRef } from "react";


import { useSearchParams } from "next/navigation";

import { Link as UILink } from "@nextui-org/link";
import { Card, Spacer } from "@nextui-org/react";

import { Button } from "@/components/atom/button";
import { LinkWithLoading } from "@/components/atom/LinkWithLoading";
import { ShoppingBagContext } from "@/contexts/shopping-bag.context";
import { useCreateOrder } from "@/hooks/use-create-order";
import { useFetchAddress } from "@/hooks/use-fetch-address";
import { useFetchStore } from "@/hooks/use-fetch-store";
import { useTranslations } from "@/hooks/use-translations";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { BagAddress } from "./components/bag-address";
import { BagAddressSkeleton } from "./components/bag-address-skeleton";
import { BagItem } from "./components/bag-item";
import { BagItemSkeleton } from "./components/bag-item-skeleton";
import { BagStore } from "./components/bag-store";

import Cookies from "js-cookie";
import { FaTrashAlt } from "react-icons/fa";

export default function ShoppingCartPage() {
  const {
    shoppingBag,
    cupcakes,
    isLoading,
    addCupcake,
    removeCupcake,
    clearBag,
  } = useContext(ShoppingBagContext);
  const searchParams = useSearchParams();

  const { isLoading: isLoadingAddress, address } = useFetchAddress();

  const { isLoading: isLoadingStore, store } = useFetchStore(address?.zipcode);

  const { isLoading: isLoadingOrder, handleCreateOrder } = useCreateOrder();
  const t = useTranslations();

  const redirectedFrom = searchParams.get("source");
  const cupcake = searchParams.get("cupcake");

  const account = Cookies.get(CookiesKeys.accountId);


  // useEffect(() => {
  //   console.log("🚀 ~ useEffect ~ cupcake:", cupcake)
  //   if (!cupcake) return;
  //    addCupcake(Number(cupcake));
  // }, []);
  // }, [cupcake]);
  

  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current && cupcake) {
      addCupcake(Number(cupcake));
      hasRun.current = true;
    }
  }, [cupcake, addCupcake]);

  const anyLoading = isLoading || isLoadingAddress || isLoadingStore || isLoadingOrder;
  const haveAllData = Boolean(shoppingBag.getTotalCount() && address && store);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center gap-3 p-4">
      <div className="w-full sm:w-96 flex sm:hidden flex-col items-center gap-3">
        <LinkWithLoading href={redirectedFrom ?? "/"} className="w-4/5">
          <Button extraClassNames="w-full">{t.buttons.continueShopping}</Button>
        </LinkWithLoading>
      </div>

      {(!!shoppingBag.getTotalCount() || isLoading) && (
        <div className="w-full sm:w-96 flex flex-col items-center gap-3">
          <Card className="w-full p-3 gap-3">
            <div className="relative self-end">
              {!isLoading && (
                <FaTrashAlt
                  className="absolute top-0 right-0 text-rose-500 hover:text-rose-700"
                  onClick={() => {
                    clearBag();
                  }}
                />
              )}
            </div>
            {isLoading
              ? [1, 2, 3].map((value, i, arr) => (
                <BagItemSkeleton
                  key={value}
                  isLastItem={i < arr.length - 1}
                />
              ))
              : shoppingBag
                .mountList(cupcakes)
                .map((cupcake, i, arr) => (
                  <BagItem
                    key={cupcake.id}
                    cupcake={cupcake}
                    addCupcake={addCupcake}
                    removeCupcake={removeCupcake}
                    isLastItem={i < arr.length - 1}
                  />
                ))}
            <Spacer y={0} />
          </Card>
        </div>
      )}

      <div className="w-full sm:w-96 flex flex-col items-center gap-3">
        <Card className="w-full p-4">
          <strong>{t.other.address}</strong>
          {isLoadingAddress ? (
            <BagAddressSkeleton />
          ) : (
            <BagAddress address={address} />
          )}
          <strong>{t.other.shop}</strong>
          {isLoadingStore || isLoadingAddress ? (
            <BagAddressSkeleton />
          ) : (
            <BagStore store={store} />
          )}
          <span className="flex justify-between mt-2">
            <strong>{t.other.total}</strong>
            <span>
              {shoppingBag.getTotalValue(cupcakes).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </span>
        </Card>

        {
          !account &&
          <a href="/account">
            <Button
              extraClassNames="w-4/5"
            >
              {t.other.login}
            </Button>
          </a>
        }

        {!!shoppingBag.getTotalCount() && !anyLoading && account && (
          <>
            {!address?.id ? (
              <LinkWithLoading href="/address/create">
                <Button extraClassNames="w-4/5">
                  {t.other.registerAddress}
                </Button>
              </LinkWithLoading>
            ) : (
              <Button
                extraClassNames="w-4/5"
                // isDisabled={anyLoading || !haveAllData} Todo: Remove this
                onClick={() => {
                  handleCreateOrder({
                    addressId: Number(address?.id),
                    storeId: Number(store?.id),
                    paymentMethod: "pix",
                    shoppingBag: shoppingBag.getCounts(),
                  });
                }}
              >
                {t.buttons.finish}
              </Button>
            )}

            <UILink href={redirectedFrom ?? "/"} className="hidden sm:block">
              {t.buttons.continueShopping}
            </UILink>
          </>
        )}
      </div>
    </div>
  );
}
