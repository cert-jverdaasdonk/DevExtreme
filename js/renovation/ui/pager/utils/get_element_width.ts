import getElementComputedStyle from './get_computed_style';

export function toNumber(attribute: string | undefined): number {
  return attribute ? Number(attribute.replace('px', '')) : 0;
}
export function getElementWidth(element: Element | undefined): number {
  return toNumber(getElementComputedStyle(element)?.width);
}
export function getElementMinWidth(element: Element | undefined): number {
  return toNumber(getElementComputedStyle(element)?.minWidth);
}
