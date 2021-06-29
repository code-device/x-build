export default function (port?: number) {
  const { VUE_APP_BASE_URL } = process.env;
  if (port) {
    return `${VUE_APP_BASE_URL}:${port}`;
  }
  return VUE_APP_BASE_URL;
}
