/* eslint-disable no-unused-vars */
import { load, Def } from '@cheatron/win32-ext';
import type { BOOL, HANDLE, HMODULE, DWORD, LPVOID } from '@cheatron/win32-ext';

/**
 * Psapi function definitions
 */
export interface Psapi {
  GetModuleInformation: (
    _hProcess: HANDLE,
    _hModule: HMODULE,
    _lpmodinfo: Buffer | LPVOID,
    _cb: DWORD,
  ) => BOOL;
}

/**
 * Native definitions for Psapi
 */
const psapiDef = {
  GetModuleInformation: [
    Def.int32,
    [Def.voidPtr, Def.voidPtr, Def.voidPtr, Def.uint32],
  ],
};

export const PsapiImpl = load<Psapi>({
  dll: 'psapi.dll',
  dllFuncs: psapiDef,
});
