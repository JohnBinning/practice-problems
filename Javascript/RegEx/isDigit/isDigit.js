String.prototype.digit = function() {
  return /^\d$/.test(this);
};

// or

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};

// or

String.prototype.digit = function() {
  return this.length === 1 && '0' <= this && this <= '9';
};