/* eslint-disable no-unused-vars */
import { load, Def } from '@cheatron/win32-ext';
import type {
  BOOL,
  HWND,
  DWORD,
  LPDWORD,
  LPVOID,
  INT,
  GetWindowCmd,
  GUIThreadInfo,
  Rect,
} from '@cheatron/win32-ext';

type WNDENUMPROC = LPVOID;

/**
 * User32 function definitions
 */
export interface User32 {
  FindWindowA: (
    _lpClassName: string | Buffer | null,
    _lpWindowName: string | Buffer | null,
  ) => HWND;
  FindWindowW: (
    _lpClassName: string | Buffer | null,
    _lpWindowName: string | Buffer | null,
  ) => HWND;
  FindWindowExA: (
    _hWndParent: HWND | null,
    _hWndChildAfter: HWND | null,
    _lpszClass: string | Buffer | null,
    _lpszWindow: string | Buffer | null,
  ) => HWND;
  FindWindowExW: (
    _hWndParent: HWND | null,
    _hWndChildAfter: HWND | null,
    _lpszClass: string | Buffer | null,
    _lpszWindow: string | Buffer | null,
  ) => HWND;
  GetTopWindow: (_hWnd: HWND | null) => HWND;
  GetWindow: (_hWnd: HWND, _uCmd: GetWindowCmd | DWORD) => HWND;
  GetGUIThreadInfo: (_idThread: DWORD, _pgui: GUIThreadInfo | Buffer) => BOOL;
  EnumWindows: (_lpEnumFunc: WNDENUMPROC, _lParam: LPVOID) => BOOL;
  GetWindowThreadProcessId: (
    _hWnd: HWND,
    _lpdwProcessId: Buffer | LPDWORD | null,
  ) => DWORD;
  GetWindowTextLengthA: (_hWnd: HWND) => INT;
  GetWindowTextLengthW: (_hWnd: HWND) => INT;
  GetWindowTextA: (_hWnd: HWND, _lpString: Buffer, _nMaxCount: INT) => INT;
  GetWindowTextW: (_hWnd: HWND, _lpString: Buffer, _nMaxCount: INT) => INT;
  GetClassNameA: (_hWnd: HWND, _lpClassName: Buffer, _nMaxCount: INT) => INT;
  GetClassNameW: (_hWnd: HWND, _lpClassName: Buffer, _nMaxCount: INT) => INT;
  GetWindowRect: (_hWnd: HWND, _lpRect: Rect | Buffer) => BOOL;
  IsIconic: (_hWnd: HWND) => BOOL;
  IsZoomed: (_hWnd: HWND) => BOOL;
}

/**
 * Native definitions for User32
 */
const user32Def = {
  FindWindowA: [Def.voidPtr, [Def.charPtr, Def.charPtr]],
  FindWindowW: [Def.voidPtr, [Def.uint16Ptr, Def.uint16Ptr]],
  FindWindowExA: [
    Def.voidPtr,
    [Def.voidPtr, Def.voidPtr, Def.charPtr, Def.charPtr],
  ],
  FindWindowExW: [
    Def.voidPtr,
    [Def.voidPtr, Def.voidPtr, Def.uint16Ptr, Def.uint16Ptr],
  ],
  GetTopWindow: [Def.voidPtr, [Def.voidPtr]],
  GetWindow: [Def.voidPtr, [Def.voidPtr, Def.uint32]],
  GetGUIThreadInfo: [Def.int32, [Def.uint32, `_Inout_ ${Def.voidPtr}`]],
  EnumWindows: [Def.int32, [Def.voidPtr, Def.voidPtr]],
  GetWindowThreadProcessId: [Def.uint32, [Def.voidPtr, `_Out_ ${Def.uint32}*`]],
  GetWindowTextLengthA: [Def.int32, [Def.voidPtr]],
  GetWindowTextLengthW: [Def.int32, [Def.voidPtr]],
  GetWindowTextA: [Def.int32, [Def.voidPtr, `_Out_ ${Def.charPtr}`, Def.int32]],
  GetWindowTextW: [
    Def.int32,
    [Def.voidPtr, `_Out_ ${Def.uint16Ptr}`, Def.int32],
  ],
  GetClassNameA: [Def.int32, [Def.voidPtr, `_Out_ ${Def.charPtr}`, Def.int32]],
  GetClassNameW: [
    Def.int32,
    [Def.voidPtr, `_Out_ ${Def.uint16Ptr}`, Def.int32],
  ],
  GetWindowRect: [Def.int32, [Def.voidPtr, `_Out_ ${Def.voidPtr}`]],
  IsIconic: [Def.int32, [Def.voidPtr]],
  IsZoomed: [Def.int32, [Def.voidPtr]],
};

export const User32Impl = load<User32>({
  dll: 'user32.dll',
  dllFuncs: user32Def,
});
