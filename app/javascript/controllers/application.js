import { Application } from "stimulus";
import RecordController from "./controllers/record_controller";

const application = Application.start();
application.register("record", RecordController);
