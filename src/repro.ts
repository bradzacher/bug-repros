import { doThing, type Forty } from "./base";

export const bar = doThing({} as Forty<{}, {}, {}>);
