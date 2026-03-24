// Safe: parse only static JSON (no user-controlled string to JSON.parse in hot path)
const CONFIG = JSON.parse('{"version":1,"feature":true}');

export function getConfig() {
  return CONFIG;
}
