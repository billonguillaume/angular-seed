export class EnumUtils {

  public static toStringArray<T>(enumToCast: {[k: number]: string}): string[] {
    return EnumUtils.toArray<T>(enumToCast, false);
  }

  public static toNumberArray<T>(enumToCast: {[k: number]: number}): number[] {
    return EnumUtils.toArray<T>(enumToCast, true);
  }

  public static getNamesAndValues<T>(enumToCast: {[k: number]: any}): { name: string, value: any }[] {
    return EnumUtils.toArray<T>(enumToCast).map(v => ({ name: enumToCast[v] as string, value: v }));
  }

  private static toArray<T>(enumToCast: {[k: number]: any}, enforeNumber = false): any[] {
    let keys = Object.keys(enumToCast);
    if (enforeNumber) {
      // Take only keys that have a numerical value
      keys = keys.filter(k => typeof enumToCast[k as any] === 'number');
    }
    return keys.map(k => enumToCast[k as any]);
  }
}
