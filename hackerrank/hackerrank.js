function calculateTotalRegion(heights) {
    let totalRegion = 0;
  
    for (let i = 0; i < heights.length; i++) {
      let left = i;
      while (left > 0 && heights[left - 1] <= heights[i]) {
        left--;
      }
  
      let right = i;
      while (right < heights.length - 1 && heights[right + 1] <= heights[i]) {
        right++;
      }
  
      totalRegion += (right - left + 1);
    }
  
    return totalRegion;
  }
  
  
  // Example usage:
  const heights = [3, 5, 6];
  const heights1 = [1, 2, 1];
  const heights2= [1, 1, 1, 1];

  console.log(calculateTotalRegion(heights));  // Output should be the sum of all regions
  console.log(calculateTotalRegion(heights1));  // Output should be the sum of all regions
  console.log(calculateTotalRegion(heights2));  // Output should be the sum of all regions
