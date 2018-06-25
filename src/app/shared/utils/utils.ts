/**
 * Check if a string is null or contains only withespaces
 * @param {string} s String to test
 * @returns {boolean} Result of null and trim check
 */
export function isNullOrWhiteSpace(s: string): boolean {
  return s == null || s.trim() === '';
}

/**
 * Check if a module has already been loaded/injected. Usefull to ensure singletons
 * @param {any} parentModule Module injected (based on type used during injection)
 * @param {string} moduleName Module name (used as context in error message)
 * @throws {Error} If the module has been successfully injected
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded.`);
  }
}
