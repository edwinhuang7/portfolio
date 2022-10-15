import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zvh7m75e',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk2M85CylCHXj0MirUSwnzAQgYaa012naLa7cyohIR4T99cmSs8YgQCAKXIUJthE9QBLCbaPMrlYfsr8ZXu9YhW5xdPx5fQI16G0qdQOjajHoOnCM0o5JC96Y1qJtqwYPHIHW0P8Jy7BQYctt1D87iWvSGz3lUH2Di01mPnQT5P7wJydnKcQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);