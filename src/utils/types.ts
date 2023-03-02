/**
 * Represents an image.
 * @typedef {Object} ImagesProps
 * @property {string} url - The url of the image.
 * @property {number} id - The id of the image.
 */
export type ImagesProps = {
  url: string;
  id: number;
};

/**
 * Represents a product.
 * @typedef {Object} DataItem
 * @property {number} id - The id of the product.
 * @property {string} category - The category of the product.
 * @property {number} quantity - The quantity of the product.
 * @property {ImagesProps[]} image - The image of the product.
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {boolean} promotion - The promotion of the product.
 * @property {number} promotion_price - The promotion price of the product.
 */
export type DataItem = {
  id: number;
  category: string;
  quantity: number;
  image: ImagesProps[];
  name: string;
  price: number;
  promotion: boolean;
  promotion_price: number;
};

/**
 * Represents a carousel component.
 * @typedef {Object} CarouselProps
 * @property {ImagesProps[]} dataCarousel - The images of the carousel.
 */
export type CarouselProps = {
  dataCarousel: ImagesProps[];
};
