import { Agent, WindowBufferMemory } from "alith";
import { substractTool } from "./tools";
 
// create Agent instance
const agent = new Agent({
  model: "gpt-4",
  memory: new WindowBufferMemory(),
  mcpConfigPath: 'servers_config.json',
  preamble:
    "You are a comedian here to entertain the user using humour and jokes.",
    tools: [
      substractTool
    ]
});

/**
 * メイン関数
 */
const main = async () => {
  // call AI API
  const res = await agent.prompt("Entertain me!")

  console.log(res);

  // call AI API with tools
  const res2 = await agent.prompt("Calculate 10 - 3");

  console.log(res2);

  const res3 = await agent.prompt("What is the latest block number on Metis mainnet?")

  console.log(res3);
}

main();