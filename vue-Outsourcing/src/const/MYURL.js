const BASEURL = "http://rap2api.taobao.org/app/mock/6507"
const GET = "/GET/api/";
const POST = "/POST/api/";
const PUT = "/PUT/api/";
const DELETE = "/DELETE/api/";

const PROJECTMOUDLE = "project/";
const USERMOUDLE = "user/";


const URL_LOGIN = BASEURL + GET + USERMOUDLE + "login";

// const URL_MANAGEPROJECTLIST = BASEURL + GET + PROJECTMOUDLE + "manageProjectList";

// const URL_JOINPROJECTLIST = BASEURL + GET + PROJECTMOUDLE + "joinProjectList";
const URL_PrepareProjectList = BASEURL + GET + PROJECTMOUDLE + "prepareProjectList";
const URL_StartProjectList = BASEURL + GET + PROJECTMOUDLE + "startProjectList";
const URL_FinishProjectList = BASEURL + GET + PROJECTMOUDLE + "finishProjectList";
const URL_STAFF = BASEURL + GET + PROJECTMOUDLE + "staff";

const URL_ADDNEWSTAFF = BASEURL + POST + PROJECTMOUDLE + "staff";

const URL_ATTENDANCE = BASEURL + GET + PROJECTMOUDLE + "attendance";

const URL_ATTENDANCERANGE = BASEURL + GET + PROJECTMOUDLE + "attendanceRange";
export default {
  URL_LOGIN,
  URL_PrepareProjectList,
  URL_StartProjectList,
  URL_FinishProjectList,
  URL_STAFF,
  URL_ADDNEWSTAFF,
  URL_ATTENDANCE,
  URL_ATTENDANCERANGE,
}
