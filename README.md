# React Navigation POC

## Requirements:
 - ✅ navigator push
 - ✅ navigator pop
 - [ ] navigator replace (may not implement https://github.com/wix/react-native-navigation/issues/286)
 - ✅ navigator pop to top
 - ?? navigator pop number of routes (may not be implemented https://github.com/wix/react-native-navigation/issues/1591)
   - Can get around this by popping twice
 - ✅ select a different tab
 - ✅ custom styles for different platform headers
 - ✅ custom header components
 - ✅ update route params
 - [ ] conduct navigation actions through non-screen level components

## Bonus points:
 - ✅ hide tabbar for individual screen
 - ✅ standard and extendable deep link handling (not as baked in as react-navigation)
 - [ ] integrate with redux
 - [ ] translucent navigation bar

 ## Results

 ### Pros
 - There is a single `navigator` object and a `showModal` function.
 - 

 ### Cons
 - Doesn't support empty tabs, so no modal cart
 - Doesn't support navigation from non-screen components
 - Doesn't support out-of-the-box `navigator.replace()`
 - Custom navigation bar support does not visually transition well from one screen to another.