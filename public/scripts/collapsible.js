$(document).ready(function() {

  let newTweetDisplay = 1;
  $(".b").on('click', function() {

      $('.new-tweet').toggleClass('new-tweet-collapse');

  });

  // function calculateCollapsedScale () {

  //   // Whereas the menu as a whole (title plus items) can act as
  //   // a proxy for the expanded state.
  //   const expanded = menu.getBoundingClientRect();
  //   let animation = '';
  //   let inverseAnimation = '';

  //   for (let step = 0; step <= 100; step++) {
  //     // Remap the step value to an eased one.
  //     let easedStep = ease(step / 100);
  
  //     // Calculate the scale of the element.
  //     const xScale = x + (1 - x) * easedStep;
  //     const yScale = y + (1 - y) * easedStep;
  
  //     animation += `${step}% {
  //       transform: scale(${xScale}, ${yScale});
  //     }`;
  
  //     // And now the inverse for the contents.
  //     const invXScale = 1 / xScale;
  //     const invYScale = 1 / yScale;
  //     inverseAnimation += `${step}% {
  //       transform: scale(${invXScale}, ${invYScale});
  //     }`;
  //   }

  //   return `
  //   @keyframes newTweetAnimation {
  //     ${animation}
  //   }
  
  //   @keyframes menuContentsAnimation {
  //     ${inverseAnimation}
  //   }`;
  // }
});
