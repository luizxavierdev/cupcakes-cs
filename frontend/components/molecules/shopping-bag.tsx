"use client";

import { useContext } from "react";

import { usePathname } from "next/navigation";

import { Badge } from "@nextui-org/react";

import { ShoppingBagContext } from "@/contexts/shopping-bag.context";
import { useTranslations } from "@/hooks/use-translations";

import { LinkWithLoading } from "../atom/LinkWithLoading";

import { FaShoppingCart } from "react-icons/fa";

export const ShoppingBag = () => {
  let { shoppingBag } = useContext(ShoppingBagContext);
  const path = usePathname();
  const t = useTranslations();

  return (
    <LinkWithLoading 
      href={`/shopping-bag?source=${path}`} 
      aria-label={t.nav.cart}
      title={t.nav.cart}
      style={{ alignItems: "center", display: "flex", marginRight: "15px", marginBottom: "5px" }}
    >
      <Badge
        content={shoppingBag.getTotalCount() > 9 ? "9+" : shoppingBag.getTotalCount()}
        size="sm"
        isInvisible={shoppingBag.getTotalCount() <= 0}
        showOutline={false}
        classNames={{
          badge: "bg-gradient-to-tr from-indigo-500 text-white",
        }}
      >
        <FaShoppingCart className="w-5 h-5 text-default-500" />
      </Badge>
    </LinkWithLoading>
  );
};
