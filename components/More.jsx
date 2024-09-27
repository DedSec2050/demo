import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const components = [
  {
    title: "Learn CISSP Mindset",
    href: "coming-soon",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Cryptography Masterclass",
    href: "/coming-soon",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "CISSP Domain Summaries",
    href: "/coming-soon",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "CISSP Twisters",
    href: "/coming-soon",
    description: "Visually or semantically separates content.",
  },
];
const More = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black">
            <span className="text-black xl:text-[1.3rem]">Resources</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
              {components.map((component) => (
                <a
                  target="_blank"
                  key={component.title}
                  className="flex rounded-[10px] px-2 font-semibold leading-tight hover:bg-accent"
                  href={component.href}
                >
                  {component.title}
                </a>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default More;
