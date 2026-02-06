// utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para mesclar classes CSS de forma inteligente.
 * Combina 'clsx' para condicionais e 'tailwind-merge' para evitar
 * conflitos de especificidade no Tailwind CSS.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
