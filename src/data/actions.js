
export const handlePlayer1Increment = () => {
    return {
        type: "incrementPlayer1" ,
    };
};
   
export const handlePlayer2Increment = () => {
    return {
        type: "incrementPlayer2" ,
    };
};
   
export const reset = () => {
    return {
      type: "reset",
    };
};