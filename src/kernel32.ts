/* eslint-disable no-unused-vars */
import { load, Def } from '@cheatron/win32-ext';
import type {
  BOOL,
  LPVOID,
  SIZE_T,
  LPCVOID,
  HANDLE,
  HMODULE,
  DWORD,
  LPDWORD,
  SecurityAttributes,
  ThreadCreationFlags,
} from '@cheatron/win32-ext';

/**
 * Kernel32 function definitions
 */
export interface Kernel32 {
  ReadProcessMemory: (
    _hProcess: HANDLE,
    _lpBaseAddress: LPCVOID,
    _lpBuffer: Buffer | LPVOID,
    _nSize: SIZE_T,
    _lpNumberOfBytesRead: SIZE_T | null,
  ) => BOOL;
  WriteProcessMemory: (
    _hProcess: HANDLE,
    _lpBaseAddress: LPVOID,
    _lpBuffer: Buffer | LPCVOID,
    _nSize: SIZE_T,
    _lpNumberOfBytesWritten: SIZE_T | null,
  ) => BOOL;
  VirtualAlloc: (
    _lpAddress: LPVOID | null,
    _dwSize: SIZE_T,
    _flAllocationType: DWORD,
    _flProtect: DWORD,
  ) => LPVOID;
  VirtualAllocEx: (
    _hProcess: HANDLE,
    _lpAddress: LPVOID | null,
    _dwSize: SIZE_T,
    _flAllocationType: DWORD,
    _flProtect: DWORD,
  ) => LPVOID;
  VirtualQuery: (
    _lpAddress: LPCVOID,
    _lpBuffer: Buffer | LPVOID,
    _dwLength: SIZE_T,
  ) => SIZE_T;
  VirtualQueryEx: (
    _hProcess: HANDLE,
    _lpAddress: LPCVOID,
    _lpBuffer: Buffer | LPVOID,
    _dwLength: SIZE_T,
  ) => SIZE_T;
  GetCurrentThread: () => HANDLE;
  GetCurrentThreadId: () => DWORD;
  GetThreadId: (_hThread: HANDLE) => DWORD;
  OpenThread: (
    _dwDesiredAccess: DWORD,
    _bInheritHandle: BOOL,
    _dwThreadId: DWORD,
  ) => HANDLE;
  SuspendThread: (_hThread: HANDLE) => DWORD;
  ResumeThread: (_hThread: HANDLE) => DWORD;
  GetExitCodeThread: (_hThread: HANDLE, _lpExitCode: Buffer | LPDWORD) => BOOL;
  GetThreadContext: (_hThread: HANDLE, _lpContext: Buffer | LPVOID) => BOOL;
  SetThreadContext: (_hThread: HANDLE, _lpContext: Buffer | LPCVOID) => BOOL;
  GetCurrentProcess: () => HANDLE;
  GetCurrentProcessId: () => DWORD;
  GetProcessId: (_hProcess: HANDLE) => DWORD;
  OpenProcess: (
    _dwDesiredAccess: DWORD,
    _bInheritHandle: BOOL,
    _dwProcessId: DWORD,
  ) => HANDLE;
  CloseHandle: (_hObject: HANDLE) => BOOL;
  WaitForSingleObject: (_hHandle: HANDLE, _dwMilliseconds: DWORD) => DWORD;
  GetModuleHandleW: (_lpModuleName: string | null) => HMODULE;
  GetModuleHandleA: (_lpModuleName: string | null) => HMODULE;
  GetProcAddress: (_hModule: HMODULE, _lpProcName: string) => LPVOID;
  CreateThread: (
    _lpThreadAttributes: SecurityAttributes | LPVOID | null,
    _dwStackSize: SIZE_T,
    _lpStartAddress: LPVOID,
    _lpParameter: LPVOID | null,
    _dwCreationFlags: ThreadCreationFlags | DWORD,
    _lpThreadId: LPDWORD | null,
  ) => HANDLE;
  CreateRemoteThread: (
    _hProcess: HANDLE,
    _lpThreadAttributes: SecurityAttributes | LPVOID | null,
    _dwStackSize: SIZE_T,
    _lpStartAddress: LPVOID,
    _lpParameter: LPVOID | null,
    _dwCreationFlags: ThreadCreationFlags | DWORD,
    _lpThreadId: LPDWORD | null,
  ) => HANDLE;
}

/**
 * Native definitions for Kernel32
 */
const kernel32Def = {
  ReadProcessMemory: [
    Def.int32,
    [Def.voidPtr, Def.voidPtr, Def.voidPtr, Def.uint64, `_Out_ ${Def.uint64}*`],
  ],
  WriteProcessMemory: [
    Def.int32,
    [Def.voidPtr, Def.voidPtr, Def.voidPtr, Def.uint64, `_Out_ ${Def.uint64}*`],
  ],
  VirtualAlloc: [
    Def.voidPtr,
    [Def.voidPtr, Def.uint64, Def.uint32, Def.uint32],
  ],
  VirtualAllocEx: [
    Def.voidPtr,
    [Def.voidPtr, Def.voidPtr, Def.uint64, Def.uint32, Def.uint32],
  ],
  VirtualQuery: [Def.uint64, [Def.voidPtr, Def.voidPtr, Def.uint64]],
  VirtualQueryEx: [
    Def.uint64,
    [Def.voidPtr, Def.voidPtr, Def.voidPtr, Def.uint64],
  ],
  GetCurrentThread: [Def.voidPtr, []],
  GetCurrentThreadId: [Def.uint32, []],
  GetThreadId: [Def.uint32, [Def.voidPtr]],
  OpenThread: [Def.voidPtr, [Def.uint32, Def.int32, Def.uint32]],
  SuspendThread: [Def.uint32, [Def.voidPtr]],
  ResumeThread: [Def.uint32, [Def.voidPtr]],
  GetExitCodeThread: [Def.int32, [Def.voidPtr, `_Out_ ${Def.uint32}*`]],
  GetThreadContext: [Def.int32, [Def.voidPtr, Def.voidPtr]],
  SetThreadContext: [Def.int32, [Def.voidPtr, Def.voidPtr]],
  GetCurrentProcess: [Def.voidPtr, []],
  GetCurrentProcessId: [Def.uint32, []],
  GetProcessId: [Def.uint32, [Def.voidPtr]],
  OpenProcess: [Def.voidPtr, [Def.uint32, Def.int32, Def.uint32]],
  CloseHandle: [Def.int32, [Def.voidPtr]],
  WaitForSingleObject: [Def.uint32, [Def.voidPtr, Def.uint32]],
  GetModuleHandleW: [Def.voidPtr, [Def.uint16Ptr]],
  GetModuleHandleA: [Def.voidPtr, [Def.charPtr]],
  GetProcAddress: [Def.voidPtr, [Def.voidPtr, Def.charPtr]],
  CreateThread: [
    Def.voidPtr,
    [
      Def.voidPtr,
      Def.uint64,
      Def.voidPtr,
      Def.voidPtr,
      Def.uint32,
      `_Out_ ${Def.uint32}*`,
    ],
  ],
  CreateRemoteThread: [
    Def.voidPtr,
    [
      Def.voidPtr,
      Def.voidPtr,
      Def.uint64,
      Def.voidPtr,
      Def.voidPtr,
      Def.uint32,
      `_Out_ ${Def.uint32}*`,
    ],
  ],
};

export const Kernel32Impl = load<Kernel32>({
  dll: 'kernel32.dll',
  dllFuncs: kernel32Def,
});
