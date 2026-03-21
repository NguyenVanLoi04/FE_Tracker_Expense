declare module "@hookform/resolvers/yup" {
  import { Resolver } from "react-hook-form";
  import { AnyObjectSchema } from "yup";

  export function yupResolver<TFieldValues extends Record<string, any>>(
    schema: AnyObjectSchema
  ): Resolver<TFieldValues>;
}
declare module "react-select-async-paginate";

declare module "swiper/css";

// declare module "framer-motion" {
//   export const m: {
//     div: React.ElementType;
//     img: React.ElementType;
//     svg: React.ElementType;
//     span: React.ElementType;
//     // Add more if needed
//   };
//   export const LazyMotion: React.ComponentType<{
//     children: React.ReactNode;
//     features: () => Promise<any>;
//     strict?: boolean;
//   }>;
// }

declare module "highlight.js" {
  import { HLJSApi } from "highlight.js/types";
  const hljs: HLJSApi;
  export default hljs;
}
