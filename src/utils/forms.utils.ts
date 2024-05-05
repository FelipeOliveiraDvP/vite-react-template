export function getOptionsFromObj(obj: Object) {
  return Object.entries(obj).map(([value, label]) => ({
    value: value as string,
    label: label as string,
  }));
}
