
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cp(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
