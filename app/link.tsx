import React from "react";
import Link from "next/link";
import {cn} from './utils';

export default function CustomLink({href, children, className}: {href: string, children: React.ReactNode, className?: string}) {
  const baseClass = "text-text-700 font-medium underline hover:text-froly-500 transition-all duration-200 hover:no-underline underline-offset-2"
  if (href.startsWith('/')) {
    return <Link href={href} className={cn(baseClass, className)}>{children}</Link>
  } else {
    return <a className={cn(baseClass, className)} href={href} >{children}</a>
  }
}
