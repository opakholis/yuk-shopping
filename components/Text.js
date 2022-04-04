import tw from "twrnc";
import { Text as TextReact } from "react-native";

export function Text({ label, style, fontWeight = "regular", ...props }) {
  switch (fontWeight) {
    case "bold":
      return (
        <TextReact
          style={[tw.style(style), { fontFamily: "Poppins_600SemiBold" }]}
          {...props}
        >
          {label}
        </TextReact>
      );
    case "medium":
      return (
        <TextReact
          style={[tw.style(style), { fontFamily: "Poppins_500Medium" }]}
          {...props}
        >
          {label}
        </TextReact>
      );
    case "regular":
    default:
      return (
        <TextReact
          style={[tw.style(style), { fontFamily: "Poppins_400Regular" }]}
          {...props}
        >
          {label}
        </TextReact>
      );
  }
}
