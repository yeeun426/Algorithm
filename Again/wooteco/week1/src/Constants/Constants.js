const CALC_INPUT = Object.freeze({
  SUM_STRING_INPUT: "덧셈할 문자열을 입력해 주세요.\n",
});

const CALC_OUTPUT = Object.freeze({
  RESULT_OUTPUT: (answer) => `결과 : ${answer}`,
});

const CALC_ERROR = Object.freeze({
  CALC_INPUT_ERROR: "[ERROR] 입력값에 공백은 입력할 수 없습니다.",
  POSITIVE_ERROR: "[ERROR] 덧셈값은 양수만 입력할 수 있습니다.",
  NAN_NUMBER_ERROR: "[ERROR] 올바르지 않은 입력값이 있습니다.",
  IS_STRING_ERROR: "[ERROR] 덧셈할 문자열이 없습니다.",
});

export { CALC_INPUT, CALC_OUTPUT, CALC_ERROR };
