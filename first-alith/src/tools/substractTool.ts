
export const substractTool = {
  name: "subtract",
  description: "Subtract y from x (i.e.: x - y)",
  parameters: JSON.stringify({
    type: "object",
    properties: {
      x: {
        type: "number",
        description: "The number to substract from",
      },
      y: {
        type: "number",
        description: "The number to substract",
      },
    },
  }),
  handler: (x: number, y: number) => {
    return x - y;
  },
}