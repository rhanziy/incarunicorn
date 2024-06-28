"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? styles.active : ""}>
      {children}
    </Link>
  );
};

export default CustomLink;
