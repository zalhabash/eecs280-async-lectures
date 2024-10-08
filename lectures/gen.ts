import { CUSTOMIZE, DocRenderer, Exam, ExamSpecification } from "examma-ray";
import { ExamGenerator } from "examma-ray/dist/ExamGenerator";
import { DateTime } from "luxon";
import { LECTURE_01 } from "./lecture01/lecture01";
import { LECTURE_02 } from "./lecture02/lecture02";
import { LECTURE_03 } from "./lecture03/lecture03";
import { LECTURE_04 } from "./lecture04/lecture04";
import { LECTURE_05 } from "./lecture05/lecture05";
import { LECTURE_06 } from "./lecture06/lecture06";
import { LECTURE_07 } from "./lecture07/lecture07";
import { LECTURE_08 } from "./lecture08/lecture08";
import { LECTURE_09 } from "./lecture09/lecture09";
import { LECTURE_10 } from "./lecture10/lecture10";
import { LECTURE_11 } from "./lecture11/lecture11";
import { LECTURE_12 } from "./lecture12/lecture12";
import { LECTURE_13 } from "./lecture13/lecture13";
import { LECTURE_14 } from "./lecture14/lecture14";
import { LECTURE_15 } from "./lecture15/lecture15";
import { LECTURE_16 } from "./lecture16/lecture16";
import { LECTURE_17 } from "./lecture17/lecture17";
import { LECTURE_18 } from "./lecture18/lecture18";
import { LECTURE_19 } from "./lecture19/lecture19";
import { LECTURE_20 } from "./lecture20/lecture20";
import { LECTURE_21 } from "./lecture21/lecture21";
import { LECTURE_22 } from "./lecture22/lecture22";
import dedent from "ts-dedent";
import { MK_BOTTOM_MESSAGE, MK_DOWNLOAD_MESSAGE, MK_QUESTIONS_MESSAGE, MK_SAVER_MESSAGE } from "../common/messages";

function addW24Warning(spec: ExamSpecification) {
  return CUSTOMIZE(spec, {
    mk_intructions: dedent`
      <div markdown="1" class="alert alert-danger">
        <p>Please note that this lecture has not yet been updated for Fall 2024. The sequence and content of several lectures will change significantly, so we recommend you do NOT work through them before they are updated. I'll try to get a few lectures ahead once the term starts.</p>
      </div>` +
    spec.mk_intructions
  });
}

export const LECTURE_SPECS = [
  { spec: LECTURE_01, updated: true, deadline: DateTime.fromISO("2024-08-26", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_02, updated: false, deadline: DateTime.fromISO("2024-08-28", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_03, updated: false, deadline: DateTime.fromISO("2024-09-04", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_04, updated: false, deadline: DateTime.fromISO("2024-09-09", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_05, updated: false, deadline: DateTime.fromISO("2024-09-11", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_06, updated: false, deadline: DateTime.fromISO("2024-09-16", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_07, updated: false, deadline: DateTime.fromISO("2024-09-18", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_08, updated: false, deadline: DateTime.fromISO("2024-09-23", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_09, updated: false, deadline: DateTime.fromISO("2024-09-25", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_10, updated: false, deadline: DateTime.fromISO("2024-09-30", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_11, updated: false, deadline: DateTime.fromISO("2024-10-02", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_12, updated: false, deadline: DateTime.fromISO("2024-10-07", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_13, updated: false, deadline: DateTime.fromISO("2024-10-09", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_14, updated: false, deadline: DateTime.fromISO("2024-10-16", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_15, updated: false, deadline: DateTime.fromISO("2024-10-21", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_16, updated: false, deadline: DateTime.fromISO("2024-10-23", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_17, updated: false, deadline: DateTime.fromISO("2024-10-30", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_18, updated: false, deadline: DateTime.fromISO("2024-11-04", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_19, updated: false, deadline: DateTime.fromISO("2024-11-06", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_20, updated: false, deadline: DateTime.fromISO("2024-11-11", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_21, updated: false, deadline: DateTime.fromISO("2024-11-13", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_22, updated: false, deadline: DateTime.fromISO("2024-11-18", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_23, updated: false, deadline: DateTime.fromISO("2024-11-20", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
  // { spec: LECTURE_24, updated: false, deadline: DateTime.fromISO("2024-11-25", {zone: "America/Detroit"}).plus({hours: 23, minutes: 59, seconds: 59}) },
].map((lec) => {
  let spec = CUSTOMIZE(lec.spec, {
    // mk_intructions: dedent`
    //   <div markdown="1" class="alert alert-danger">
    //     <p>Due to electrical work affecting a North Campus server room, the participation server is temporarily down. Once it comes back up you'll be able to see your participation credit again.</p>
    //   </div>` +
    //   lec.spec.mk_intructions,
    mk_questions_message: MK_QUESTIONS_MESSAGE,
    mk_bottom_message: MK_BOTTOM_MESSAGE,
    mk_download_message: MK_DOWNLOAD_MESSAGE,
    mk_saver_message: MK_SAVER_MESSAGE,
    allow_clientside_content: true,
  });

  if (lec.updated) {
    spec = CUSTOMIZE(spec, {
      credentials_strategy: {
        strategy: "google_local",
        client_id: "444801118749-m2g9gl3gvvkh5ru959dmka0lsk94d9uq.apps.googleusercontent.com",
        // client_id: "444801118749-099920plmkl1s5n5u563pbmu71lo4bot.apps.googleusercontent.com",
        auth_endpoint: "https://examma-ray.eecs.umich.edu/public_api/participation/auth/",
        message: "Sign in with your @umich.edu Google account to earn participation credit for completing embedded exercises."
      },
      completion: {
        threshold: 1,
        tooltip: "",
        endpoints: {
          check: "https://examma-ray.eecs.umich.edu/public_api/participation/me/",
          submit: "https://examma-ray.eecs.umich.edu/public_api/participation/me/",
          // check: "https://localhost/public_api/participation/me/",
          // submit: "https://localhost/public_api/participation/me/",
        },
        local_deadline: lec.deadline && {
          when: lec.deadline,
          grace_minutes: 5
        }
      }
    });
  }
  else {
    spec = addW24Warning(spec);
  }


  return spec;
});


LECTURE_SPECS.forEach(lec => {

  const generator = new ExamGenerator(Exam.create(lec), {
    uuid_strategy: "plain",
  });
  
  generator.assignExams([
    {name: "eecs280", uniqname: "eecs280"}
  ]),

  generator.writeAll(new DocRenderer());
});

