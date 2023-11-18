import { useEffect, useState } from "react";
import { parse, stringify } from 'json5'
import { prettyPrintJson } from 'pretty-print-json';

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
    const [blueprintText, setBlueprintText] = useState(stringify(defaultBlueprint));
    const [blueprintJson, setBlueprintJson] = useState(defaultBlueprint);
    const [blueprintHtml, setBlueprintHtml] = useState(prettyPrintJson.toHtml(defaultBlueprint));
    const [error, setError] = useState('');
    
  useEffect(() => {
    try {
      const blueprintJson = parse(blueprintText);
      if (blueprintJson) {
        setBlueprintJson(blueprintJson);
        console.log('blueprintText', blueprintText);
        console.log('blueprintHtml', prettyPrintJson.toHtml(blueprintJson));
        setBlueprintHtml(prettyPrintJson.toHtml(blueprintJson));
      }
    } catch (error) {
      
    
    }
  }, [blueprintText])
    return {
      setBlueprintText: (text: string) => {
        if (!text) {
          return;
        }
        try {
          const blueprintString = stringify(parse(text.replace(/\n/g, '').replace(/\\t/g, '')));
          setError('');
          setBlueprintText(blueprintString);
        } catch (e: any) {
          console.log('--->', text, e);
          setError(e.message);
          setBlueprintText(text);
          return;
        }

      },
      blueprint: {
        text: blueprintText,
        json: blueprintJson,
        html: blueprintHtml,
      }
    }  
}