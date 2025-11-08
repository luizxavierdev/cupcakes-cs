"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import NextLink from "next/link";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";

import { LanguageSwitch } from "@/components/molecules/language-switch";
import { ThemeSwitch } from "@/components/molecules/theme-switch";
import { useTranslations } from "@/hooks/use-translations";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { LinkWithLoading } from "../atom/LinkWithLoading";
import { ShoppingBag } from "./shopping-bag";

import clsx from "clsx";

const siteConfigBase = {
  name: "Cupcakes CS",
  navItems: [
    {
      key: "account",
      href: "/account",
      logged: true
    },
    {
      key: "login",
      href: "/account",
      logged: false
    },
    {
      key: "cart",
      href: "/shopping-bag",
      logged: true
    },
    {
      key: "orders",
      href: "/order",
      logged: true
    },
    {
      key: "categories",
      href: "/category",
      always: true
    },
  ],
};

export const Navbar = () => {
  const [accountId, setAccountId] = useState<string | undefined>(undefined);
  const t = useTranslations();

  useEffect(() => {
    // Client-side cookie reading
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return undefined;
    };
    setAccountId(getCookie(CookiesKeys.accountId));
  }, []);

  const navItems = siteConfigBase.navItems.map(item => ({
    ...item,
    label: t.nav[item.key as keyof typeof t.nav]
  }));

  const filteredNavItems = navItems.filter((item) => {
    if (item.always) return true;
    if (accountId && item.logged === true) return true;
    if (!accountId && item.logged === false) return true;
    return false;
  });

  return (
    <NextUINavbar maxWidth="xl" position="sticky">

      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <GiCupcake className="max-h-fit" /> */}
            <Image height={32} width={32} src="/favicon-32x32.png" alt={"Icon Cupcakes CS"} />
            <p className="font-bold text-inherit">{siteConfigBase.name}</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">

          {filteredNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >

        <NavbarItem className="hidden sm:flex gap-2 sm:align-center">
          <ShoppingBag />
          <LanguageSwitch />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 sm:align-center">
        <ShoppingBag />
        <LanguageSwitch />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">

          {filteredNavItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <LinkWithLoading color="foreground" href={item.href} size="lg">
                {item.label}
              </LinkWithLoading>
            </NavbarMenuItem>
          ))}

        </div>
      </NavbarMenu>

    </NextUINavbar>
  );
};
