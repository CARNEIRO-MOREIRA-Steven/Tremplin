import type { Metadata } from "next";
import RealignementCom from "./RealignementCom";

export const metadata: Metadata = {
  title: "Plan de communication pour améliorer votre visibilité",
  description:
    "Plan de communication | une refonte pour développer une stratégie efficace | structurez vos actions, messages et visibilité pour atteindre vos objectifs.",
        icons: {
    icon: "/favicon.ico",
  },
};

export default function RealignementComPage() {
  return <RealignementCom />;
}