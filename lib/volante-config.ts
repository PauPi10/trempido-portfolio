// «Volante» was renamed to «Rondi» (19-nov-2026). Everything lives in
// lib/rondi-config.ts now; these aliases only keep old imports compiling.
// The /volante… URLs redirect permanently to /rondi… (see next.config.mjs).
export {
  RONDI_APP_STORE_ID as VOLANTE_APP_STORE_ID,
  RONDI_BRAND as VOLANTE_BRAND,
  rondiAppStoreUrl as volanteAppStoreUrl,
} from "./rondi-config"
