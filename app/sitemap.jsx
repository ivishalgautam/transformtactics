export default async function Sitemap() {
  const baseUrl = "/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
