import type { Metadata } from "next";
import BrandingClient from "./BrandingClient";

export const metadata: Metadata = {
  title: "Branding : développez une image de marque forte",
  description:
    "Branding & image de marque | Développez une identité forte, cohérente et mémorable | Stratégie, visibilité et crédibilité pour votre entreprise.",
};

export default function BrandingPage() {
  return <BrandingClient />;
}