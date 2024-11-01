import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { AlignRight } from "lucide-react";
import { NavItem } from ".";

interface MobileNavProps {
  navItems: NavItem[];
  logo?: React.ReactNode;
  siteName: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

export function MobileNav({
  navItems,
  logo,
  siteName,
  isOpen,
  toggleOpen,
}: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={toggleOpen}>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant="ghost"
          className="px-0 text-3xl hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <AlignRight />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0 t bg-white font-mono">
        <MobileLink
          href="/"
          onOpenChange={toggleOpen}
          className="flex items-center w-fit"
        >
          {logo && <div className="mr-2 h-4 w-4">{logo}</div>}
          <span className="font-bold text-2xl text-orange-650">{siteName}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 ">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2 pt-6">
                <MobileLink
                  href={item.href as string}
                  onOpenChange={toggleOpen}
                  className="font-medium font-mono"
                >
                  {item.title}
                </MobileLink>
                {item.items?.map((subItem) => (
                  <React.Fragment key={subItem.href}>
                    {!subItem.disabled && (
                      <MobileLink
                        href={subItem.href || "#"}
                        onOpenChange={toggleOpen}
                        className="text-muted-foreground"
                      >
                        {subItem.title}
                        {subItem.label && (
                          <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                            {subItem.label}
                          </span>
                        )}
                      </MobileLink>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: () => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(); // Close menu on link click
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
