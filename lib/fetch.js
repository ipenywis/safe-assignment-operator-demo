export async function enhancedFetch(...args) {
  const response = await fetch(...args);
  if (!response.ok) throw new Error("Fetch Failed!");

  return response;
}

// export const fetch = enhancedFetch.bind(window);
