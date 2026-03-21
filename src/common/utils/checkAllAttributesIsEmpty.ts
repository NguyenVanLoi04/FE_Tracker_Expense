export const isAllAttributesIsEmpty = (object: object) =>
  Object.values(object).every((x) => !x || (typeof x === 'string' && !x.trim()));
