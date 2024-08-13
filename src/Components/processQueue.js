export function getFinalState(baseState, queue) {
  let finalState = baseState;
<<<<<<< HEAD
  for (let update of queue) {
    if (typeof update === "function") {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }
=======
>>>>>>> 00bc3b6 (get the expected rersult)

  return finalState;
}
