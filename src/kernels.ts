import { NotebookPanel } from '@jupyterlab/notebook';

export const KERNEL_URL_TO_NAME: Record<string, string> = {
  python: 'python',
  r: 'xr',
  'ai-sdk-chat': 'ai-sdk-chat'
};

export const KERNEL_NAME_TO_URL: Record<string, string> = {
  python: 'python',
  xpython: 'python',
  xr: 'r',
  'ai-sdk-chat': 'ai-sdk-chat'
};

export const KERNEL_DISPLAY_NAMES: Record<string, string> = {
  python: 'Python',
  xpython: 'Python',
  xr: 'R',
  'ai-sdk-chat': 'AI SDK Chat'
};

/**
 * List of kernels that will appear in the kernel switcher dropdown,
 * i.e., for which we have an available factory.
 */
export const ACTIVE_KERNELS: readonly string[] = ['python', 'xr', 'ai-sdk-chat'];

/**
 * Switch the notebook's kernel if it differs from the desired one.
 * @param panel The NotebookPanel to operate on
 * @param desiredKernel The kernel name to switch to (e.g. "python", "xr")
 */
export async function switchKernel(panel: NotebookPanel, desiredKernel: string): Promise<void> {
  const currentKernel = panel.sessionContext.session?.kernel?.name;
  if (currentKernel === desiredKernel) {
    console.log(`Already on kernel: ${desiredKernel}. Skipping switch.`);
    return;
  }
  await panel.sessionContext.changeKernel({ name: desiredKernel });
  console.log(`Switched to kernel: ${desiredKernel}.`);
}
