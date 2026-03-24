/**
 * Entry point — does not run vulnerable paths by default.
 * Samples live under src/vulnerable/ and src/safe/ for SAST scanning.
 */
import { describeSamples } from "./manifest.js";

console.log("SAST test harness — scan src/vulnerable and src/safe");
console.log(describeSamples());
