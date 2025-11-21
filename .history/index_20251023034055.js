// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc; // if short, no masking

  const visible = cc.slice(-4); // last 4 characters
  const masked = "#".repeat(cc.length - 4); // replace rest with #
  return masked + visible;
}
