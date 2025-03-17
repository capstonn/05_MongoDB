// 외부에서 해당 모듈의 hi, goodbye 사용 가능
export const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

export const goodbye = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};

// export { hi, goodbye };
