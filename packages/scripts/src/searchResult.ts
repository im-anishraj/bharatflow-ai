import * as p from "@clack/prompts";
import prisma from "@typebot.io/prisma";
import { promptAndSetEnvironment } from "./utils";

const searchResult = async () => {
  await promptAndSetEnvironment("production");

  const typebotId = await p.text({
    message: "Typebot ID?",
  });

  if (!typebotId || typeof typebotId !== "string") {
    console.log("No ID provided");
    return;
  }

  const result = await prisma.result.findFirst({
    where: {
      typebotId,
      hasStarted: true,
      variables: {
        array_contains: {
          id: "",
          name: "",
          value: "",
          isSessionVariable: false,
        },
      },
    },
    select: {
      id: true,
    },
  });

  if (!result) {
    console.log("Result not found");
    return;
  }

  console.log(result);
};

searchResult();
