/// <reference types="vite/client" />

declare module "*.scss" {
  export const text: string
  export const styles: Record<string, string>
}
