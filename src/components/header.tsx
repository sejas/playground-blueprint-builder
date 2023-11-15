import {
    __experimentalHStack as HStack,
    __experimentalText as Text,
    Button,
} from "@wordpress/components";
  
;export function Header() {
   return <header className="app_header">
    <HStack>
      <Text>WordPress Playground Blueprint Builder</Text>
      <Button variant="primary" onClick={() => alert("Hello World")}>
        Run
      </Button>
    </HStack>
  </header>
}