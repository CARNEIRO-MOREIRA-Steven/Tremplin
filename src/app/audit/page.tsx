import type { Metadata } from "next";
import AuditContent from "./AuditContent";

export const metadata: Metadata = {
  title: "Audit de communication : améliorez votre visibilité",
  description:
    "Audit de communication | Analysez vos forces, votre image et votre stratégie | Identifiez les axes à améliorer pour gagner en visibilité.",
        icons: {
    icon: "/favicon.ico",
  },
};

export default function AuditPage() {
  return <AuditContent />;
}