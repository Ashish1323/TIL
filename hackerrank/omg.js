function decode(MaxLimit, CyberTable) {
    // Define the modulus
    const MOD = 1000000007;
  
    // Calculate total minimum characters required
    const totalMinRequired = CyberTable.reduce((acc, num) => acc + num, 0);
  
    // Check if the minimum requirements exceed the maximum limit
    if (totalMinRequired > MaxLimit) {
      return 0; // No possible passwords
    }
  
    // Remaining characters that can be distributed among all digits
    const remainingChars = MaxLimit - totalMinRequired;
  
    // Using stars and bars theorem to calculate the number of ways
    // to distribute 'remainingChars' into 10 slots (0-9 digits)
    return starsAndBars(10, remainingChars, MOD);
  }
  
  function starsAndBars(bins, stars, mod) {
    // We need to calculate (bins + stars - 1) choose (stars)
    const n = bins + stars - 1;
    const k = stars;
  
    // Calculate n choose k % mod
    let numerator = 1, denominator = 1;
    for (let i = 0; i < k; i++) {
      numerator = (numerator * (n - i)) % mod;
      denominator = (denominator * (i + 1)) % mod;
    }
  
    // Calculate modular inverse of the denominator
    let denomInverse = 1, base = denominator, exponent = mod - 2;
    while (exponent > 0) {
      if (exponent % 2 === 1) denomInverse = (denomInverse * base) % mod;
      base = (base * base) % mod;
      exponent >>= 1;
    }
  
    return (numerator * denomInverse) % mod;
  }
  
  // Example usage:
  const MaxLimit = 3;
  const CyberTable = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log(decode(MaxLimit, CyberTable));  // Expected to output 36
  