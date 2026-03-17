import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ProductSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={250} // card max-w-xs অনুযায়ী
      height={400} // image + text + button অনুযায়ী
      viewBox="0 0 250 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="max-w-xs"
    >
      {/* Image */}
      <rect x="0" y="0" rx="0" ry="0" width="250" height="180" />

      {/* Title */}
      <rect x="16" y="190" rx="4" ry="4" width="180" height="20" />

      {/* Price */}
      <rect x="16" y="220" rx="4" ry="4" width="80" height="16" />

      {/* Discount */}
      <rect x="110" y="220" rx="4" ry="4" width="50" height="16" />

      {/* Rating */}
      <rect x="16" y="250" rx="4" ry="4" width="60" height="14" />

      {/* Category */}
      <rect x="16" y="270" rx="4" ry="4" width="100" height="12" />

      {/* Button */}
      <rect x="0" y="300" rx="6" ry="6" width="250" height="40" />
    </ContentLoader>
  );
}
