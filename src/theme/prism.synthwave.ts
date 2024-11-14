  interface PrismTheme {
    plain: {
      color: string;
      textShadow?: string;
      backgroundColor?: string; 
    };
    styles: {
      types: string[];
      style: {
        color?: string;
        textShadow?: string;
        fontWeight?: "normal" | "bold";
        fontStyle?: "normal" | "italic";
        cursor?: "help";
      };
    }[];
  }
  
  const synthwave84Theme: PrismTheme = {
    plain: {
      color: "#f92aad",
      backgroundColor: "black",  // Make the background transparent to see the gradient
    },
    styles: [
        {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
            style: {
              color: "#8e8e8e"
            }
          },
          {
            types: ["punctuation"],
            style: {
              color: "#ccc"
            }
          },
          {
            types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
            style: {
              color: "#e2777a"
            }
          },
          {
            types: ["property", "selector"],
            style: {
              color: "#72f1b8",
            }
          },
          {
            types: ["function-name"],
            style: {
              color: "#6196cc"
            }
          },
          {
            types: ["boolean", "selector.id", "function"],
            style: {
              color: "#fdfdfd",
            }
          },
          {
            types: ["class-name"],
            style: {
              color: "#fff5f6",
            }
          },
          {
            types: ["constant", "symbol"],
            style: {
              color: "#f92aad",
            }
          },
          {
            types: ["important", "atrule", "keyword", "selector.class", "builtin"],
            style: {
              color: "#5885FC",
            }
          },
          {
            types: ["string", "char", "attr-value", "regex", "variable"],
            style: {
              color: "#f87c32"
            }
          },
          {
            types: ["operator", "entity", "url"],
            style: {
              color: "#67cdcc"
            }
          },
          {
            types: ["important", "bold"],
            style: {
              fontWeight: "bold"
            }
          },
          {
            types: ["italic"],
            style: {
              fontStyle: "italic"
            }
          },
          {
            types: ["entity"],
            style: {
              cursor: "help"
            }
          },
          {
            types: ["inserted"],
            style: {
              color: "green"
            }
          }
    ]
  };

  export default synthwave84Theme;