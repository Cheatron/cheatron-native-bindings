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
  MemoryFreeType,
  GetModuleHandleExFlag,
  ToolhelpSnapshotFlag,
  ProcessEntry32W,
  ProcessEntry32,
  ThreadEntry32,
  ModuleEntry32W,
  ModuleEntry32,
  HeapList32,
  HeapEntry32,
  INT_PTR,
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
  VirtualFree: (
    _lpAddress: LPVOID,
    _dwSize: SIZE_T,
    _dwFreeType: MemoryFreeType | DWORD,
  ) => BOOL;
  VirtualFreeEx: (
    _hProcess: HANDLE,
    _lpAddress: LPVOID,
    _dwSize: SIZE_T,
    _dwFreeType: MemoryFreeType | DWORD,
  ) => BOOL;
  VirtualProtect: (
    _lpAddress: LPVOID,
    _dwSize: SIZE_T,
    _flNewProtect: DWORD,
    _lpflOldProtect: LPDWORD | Buffer,
  ) => BOOL;
  VirtualProtectEx: (
    _hProcess: HANDLE,
    _lpAddress: LPVOID,
    _dwSize: SIZE_T,
    _flNewProtect: DWORD,
    _lpflOldProtect: LPDWORD | Buffer,
  ) => BOOL;
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
  GetModuleHandleW: (_lpModuleName: string | Buffer | null) => HMODULE;
  GetModuleHandleA: (_lpModuleName: string | Buffer | null) => HMODULE;
  GetModuleHandleExW: (
    _dwFlags: GetModuleHandleExFlag | DWORD,
    _lpModuleName: string | Buffer | LPCVOID | null,
    _phModule: Buffer | LPCVOID,
  ) => BOOL;
  GetModuleHandleExA: (
    _dwFlags: GetModuleHandleExFlag | DWORD,
    _lpModuleName: string | Buffer | LPCVOID | null,
    _phModule: Buffer | LPCVOID,
  ) => BOOL;
  GetProcAddress: (_hModule: HMODULE, _lpProcName: string | Buffer) => INT_PTR;
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
  TerminateThread: (_hThread: HANDLE, _dwExitCode: DWORD) => BOOL;
  ExitThread: (_dwExitCode: DWORD) => void;
  LoadLibraryA: (_lpLibFileName: string | Buffer) => HMODULE;
  LoadLibraryW: (_lpLibFileName: string | Buffer) => HMODULE;
  FreeLibrary: (_hLibModule: HMODULE) => BOOL;
  CreateToolhelp32Snapshot: (
    _dwFlags: ToolhelpSnapshotFlag | DWORD,
    _th32ProcessID: DWORD,
  ) => HANDLE;
  Process32FirstW: (
    _hSnapshot: HANDLE,
    _lppe: ProcessEntry32W | Buffer,
  ) => BOOL;
  Process32First: (_hSnapshot: HANDLE, _lppe: ProcessEntry32 | Buffer) => BOOL;
  Process32NextW: (_hSnapshot: HANDLE, _lppe: ProcessEntry32W | Buffer) => BOOL;
  Process32Next: (_hSnapshot: HANDLE, _lppe: ProcessEntry32 | Buffer) => BOOL;
  Module32FirstW: (_hSnapshot: HANDLE, _lpme: ModuleEntry32W | Buffer) => BOOL;
  Module32First: (_hSnapshot: HANDLE, _lpme: ModuleEntry32 | Buffer) => BOOL;
  Module32NextW: (_hSnapshot: HANDLE, _lpme: ModuleEntry32W | Buffer) => BOOL;
  Module32Next: (_hSnapshot: HANDLE, _lpme: ModuleEntry32 | Buffer) => BOOL;
  Thread32First: (_hSnapshot: HANDLE, _lpte: ThreadEntry32 | Buffer) => BOOL;
  Thread32Next: (_hSnapshot: HANDLE, _lpte: ThreadEntry32 | Buffer) => BOOL;
  Heap32ListFirst: (_hSnapshot: HANDLE, _lphl: HeapList32 | Buffer) => BOOL;
  Heap32ListNext: (_hSnapshot: HANDLE, _lphl: HeapList32 | Buffer) => BOOL;
  Heap32First: (
    _lphe: HeapEntry32 | Buffer,
    _th32ProcessID: DWORD,
    _th32HeapID: number | bigint,
  ) => BOOL;
  Heap32Next: (_lphe: HeapEntry32 | Buffer) => BOOL;
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
  VirtualFree: [Def.int32, [Def.voidPtr, Def.uint64, Def.uint32]],
  VirtualFreeEx: [
    Def.int32,
    [Def.voidPtr, Def.voidPtr, Def.uint64, Def.uint32],
  ],
  VirtualProtect: [
    Def.int32,
    [Def.voidPtr, Def.uint64, Def.uint32, `_Out_ ${Def.uint32}*`],
  ],
  VirtualProtectEx: [
    Def.int32,
    [Def.voidPtr, Def.voidPtr, Def.uint64, Def.uint32, `_Out_ ${Def.uint32}*`],
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
  GetModuleHandleExW: [
    Def.int32,
    [Def.uint32, Def.uint16Ptr, `_Out_ ${Def.voidPtr}*`],
  ],
  GetModuleHandleExA: [
    Def.int32,
    [Def.uint32, Def.charPtr, `_Out_ ${Def.voidPtr}*`],
  ],
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
  TerminateThread: [Def.int32, [Def.voidPtr, Def.uint32]],
  ExitThread: [Def.void, [Def.uint32]],
  LoadLibraryA: [Def.voidPtr, [Def.charPtr]],
  LoadLibraryW: [Def.voidPtr, [Def.uint16Ptr]],
  FreeLibrary: [Def.int32, [Def.voidPtr]],
  CreateToolhelp32Snapshot: [Def.voidPtr, [Def.uint32, Def.uint32]],
  Process32FirstW: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Process32First: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Process32NextW: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Process32Next: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Module32FirstW: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Module32First: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Module32NextW: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Module32Next: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Thread32First: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Thread32Next: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Heap32ListFirst: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Heap32ListNext: [Def.int32, [Def.voidPtr, `_Inout_ ${Def.voidPtr}`]],
  Heap32First: [Def.int32, [`_Inout_ ${Def.voidPtr}`, Def.uint32, Def.uint64]],
  Heap32Next: [Def.int32, [`_Inout_ ${Def.voidPtr}`]],
};

export const Kernel32Impl = load<Kernel32>({
  dll: 'kernel32.dll',
  dllFuncs: kernel32Def,
});
