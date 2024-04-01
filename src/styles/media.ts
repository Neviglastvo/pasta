const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(992),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};
