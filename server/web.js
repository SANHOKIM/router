const express = require("express");
const morgan = require("morgan"); //서버 스피드 및 요청체크
const server = express();
const adminrouter = require("./adm/"); //관리자 라우터생성

//화면노출파일들에게 루트디렉토리설정
server.use(express.static(path.join(__dirname, "web")));
//주소창에 /admin을 요청하면 adm폴더 접근
server.use("/admin", express.static(path.join(__dirname, "adm")));
server.use("/admin/:id", adminrouter);
//req.param.변수로 받게됩니다.
//req.query.변수

//postman으로 서버전송데이터를 확인한다.
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web/index.html"));
});
server.post("/form", (req, res) => {});

//제일 마지막
server.use((req, res, next) => {
  //  res.status(404).send("주소똑바로치시오!")
  res.status(404).sendFile(path.join(__dirname, "web/nopage.html"));
});

server.use(morgan("dev"));
server.listen(8001, () => {
  console.log("에러없이구동중");
});
