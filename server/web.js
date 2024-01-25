const express = require("express");
const server = express();

//postman으로 서버전송데이터를 확인한다.
// 나는 get || post 로 오는것만 상대한다. 라우터(관문)생성하는행위?

server.get();
server.post();

// 나는 아무거나 괜찮아.. 서버는 요청이 와야 친다..아무거나 요청 오세요..

server.listen(8001, () => {
  console.log("에러없이구동중");
});
