import { FileListData } from "@/models/file";
import { saveAs } from "file-saver";

const downloadByUrl = async (file: FileListData) => {
  if (!file.path) return;
  if (file.type === "图片") {
    saveAs(file.path, file.name);
    // downLoadImg(file.path, file.name);
  } else {
    // saveAs(file.path, file.name);
    const a = document.createElement("a");
    a.href = file.path;
    a.style.display = "none";
    a.setAttribute("target", "_blank");
    a.download = file.name || "unknown";
    document.body.appendChild(a);
    a.click();
    // window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
};

const downLoadImg = (res: string, filename: string) => {
  const blob = new Blob([res], {
    type: "responseBlob",
  });
  saveAs(blob, filename);
};

export default downloadByUrl;
