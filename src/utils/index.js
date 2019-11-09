export function randomString(
  length = 10,
  allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }
  return result;
}

export function safeSlot(h, slot) {
  if (slot && slot.length > 1) {
    return h("div", [slot]);
  }
  return slot;
}
