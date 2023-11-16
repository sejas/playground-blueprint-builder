import { useState } from "react";

const defaultBlueprint = {
    landingPage: "/wp-admin/",
    preferredVersions: {
      php: "8.2",
      wp: "6.4",
    },
    steps: [
      {
        step: "login",
        username: "admin",
        password: "password",
      },
    ],
  };

export function useBlueprintJson() {
    const [blueprintText, setBlueprintText] = useState(JSON.stringify(defaultBlueprint));
    return {
      blueprintText,
      setBlueprintText,
      blueprintJson: JSON.parse(blueprintText),
    }  
}