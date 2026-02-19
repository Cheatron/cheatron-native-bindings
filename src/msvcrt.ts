/* eslint-disable no-unused-vars */
import { load, Def } from '@cheatron/win32-ext';
import type { LPVOID, SIZE_T } from '@cheatron/win32-ext';

/**
 * MSVCRT function definitions
 */
export interface MSVCRT {
  malloc: (_size: SIZE_T) => LPVOID;
  free: (_ptr: LPVOID) => void;
  memcpy: (_dest: LPVOID, _src: LPVOID, _count: SIZE_T) => LPVOID;
  memset: (_dest: LPVOID, _value: number, _count: SIZE_T) => LPVOID;
}

/**
 * Native definitions for MSVCRT
 */
const msvcrtDef = {
  malloc: [Def.voidPtr, [Def.uint64]],
  free: [Def.void, [Def.voidPtr]],
  memcpy: [Def.voidPtr, [Def.voidPtr, Def.voidPtr, Def.uint64]],
  memset: [Def.voidPtr, [Def.voidPtr, Def.int32, Def.uint64]],
};

export const MsvcrtImpl = load<MSVCRT>({
  dll: 'msvcrt.dll',
  dllFuncs: msvcrtDef,
});
