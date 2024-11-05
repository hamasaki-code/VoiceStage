import { Controller } from "stimulus";
import RecordRTC from "recordrtc";

export default class extends Controller {
  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.recorder = new RecordRTC(stream, {
        type: "audio",
      });
      this.recorder.startRecording();
    });
  }

  stopRecording() {
    this.recorder.stopRecording(() => {
      const audioBlob = this.recorder.getBlob();
      // ここでaudioBlobを保存する処理などを追加
    });
  }
}
