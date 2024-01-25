const express = require("express");
const server = express();
const adminrouter = require("./adm/");

// 화면노출파일들에게 루트디렉토리설정
server.use(express.static(path.join(__dirname, "web")));
// 주소창에 /admin 요청하면 adm폴더 접근
server.use("/admin", express.static(path.join(__dirname, "adm")));
server.use("/admin/:id", adminrouter);
//req.param.변수로 받게됩니다.
//req.query.변수

//postman으로 서버전송데이터를 확인한다.
// 나는 get || post 로 오는것만 상대한다. 라우터(관문)생성하는행위?
server.get("/", (req, res) => {});
server.post("/from", (req, res) => {});

// 나는 아무거나 괜찮아.. 서버는 요청이 와야 친다..아무거나 요청 오세요..

server.use((req, res, next) => {
  res.status(404).send("주소똑바로치시오");
  res.status(404).sendFile(path.join(__dirname, "../web/nopage.html"));
});

server.listen(8001, () => {
  console.log("에러없이구동중");
});
