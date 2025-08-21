import { Inngest } from "inngest";
import { functions as aiFunctions } from "./aiFunctions";

export const inngest = new Inngest({ id: "thinkease" });

// Your new function:

// Add the function to the exported array:
export const functions = [...aiFunctions];
