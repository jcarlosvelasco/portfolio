import { defineMiddleware } from "astro:middleware";
import { createClient } from '@vercel/edge-config';

const spanishSpeakingCountries = [
  "ES", "MX", "AR", "CO", "PE", "VE", "CL", "EC", "GT", "CU", "BO", "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ"
];

export const onRequest = defineMiddleware(async ({ locals, request, redirect }, next) => {
  const url = new URL(request.url);
  
  // Skip redirection if already on a localized path
  if (url.pathname.startsWith("/en") || url.pathname.startsWith("/es")) {
    return next();
  }

  try {
    const edgeConfig = createClient(process.env.EDGE_CONFIG);
    const country = await edgeConfig.get('country') as string;

    if (spanishSpeakingCountries.includes(country)) {
      return redirect("/es");
    } else {
      return redirect("/en");
    }
  } catch (error) {
    console.error("Error determining user's country:", error);
    return redirect("/en"); // Default to English on error
  }
});