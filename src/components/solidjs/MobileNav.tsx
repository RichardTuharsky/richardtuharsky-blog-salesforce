import Link from "@/solid/Link.tsx";
import { NAVIGATION } from "@/consts";
import { For } from "solid-js";
import { useTranslations } from "@/i18n";

const t = useTranslations();

export default function MobileNav() {
  let menuRef!: HTMLDivElement;

  const toggleMenu = () => {
    const isOpen = document.body.style.overflow === "hidden";
    menuRef.classList.toggle("translate-x-full", isOpen);
    menuRef.classList.toggle("translate-x-0", !isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  return (
    <>
      <button
        aria-label={t("components.mobileNav.toggleMenu")}
        class="sm:hidden p-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        ref={menuRef}
        class="translate-x-full fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform duration-300 ease-in-out"
      >
        <div class="flex justify-end p-6">
          <button
            class="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={t("components.mobileNav.toggleMenu")}
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav class="px-10 pt-4 space-y-1">
          <For each={NAVIGATION}>
            {({ href, title }) => (
              <div>
                <Link
                  href={href}
                  class="block py-4 text-2xl font-display text-foreground hover:text-accent transition-colors duration-200 border-b border-border/50"
                  onClick={toggleMenu}
                >
                  {t(title)}
                </Link>
              </div>
            )}
          </For>
        </nav>
      </div>
    </>
  );
}
