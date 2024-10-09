import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

function main() {
  try {
    execSync("git add .");
    execSync("git config core.quotepath false");

    const output = execSync("git diff --cached --name-only", { encoding: "utf-8" });

    // 将文件路径输出为数组
    const addedFiles = output.trim().split("\n").filter(Boolean);

    const blogFiles = addedFiles.filter((file) => file.includes("/") && file.endsWith(".md"));

    const contentArr = blogFiles.map((filePath) => {
      const fileName = filePath.split("/").pop().split(".")[0];
      return `[${addSpaceBetweenChineseAndEnglish(fileName)}](${filePath})`;
    });

    if (blogFiles.length) {
      insertCatalogText({ filePath: path.join(getCurrentFolder(), "../CATALOG.md"), insertTextArray: contentArr });
      // insertSidebarText({ filePath: path.join(getCurrentFolder(), "../_sidebar.md"), title: `- ${blogFiles[0].split("/")[0]}`, insertTextArray: contentArr });
    }

    // 创建接口，用于读取用户输入
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // 提示用户输入
    rl.question("请检查CATALOG和_sidebar的commit, 没问题请输入y后自动提交(y/n): ", (answer) => {
      if (answer.toLowerCase() === "y") {
        console.log("继续执行脚本...");
        execSync("git add .");
        let msg = blogFiles?.[0]?.split("/")?.pop()?.split(".")[0] ?? "";
        if (msg) msg = " " + msg;
        execSync(`git commit -m "doc: [${getTodayDate({ joiner: "/" })}]${msg}"`);
      } else {
        console.log("终止脚本执行。");
      }
      rl.close(); // 关闭 readline 接口
    });
  } catch (error) {
    console.error("执行出错:", error);
    throw new Error(`执行出错: ${error}`);
  }
}

function getTodayDate({ joiner = "-" } = {}) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return [year, month, day].join(joiner);
}

function insertCatalogText({ filePath, insertText, insertTextArray = [], insertLine = 2 } = {}) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    const insertTitle = `**${getTodayDate()}**`;
    const [, number] = data.match(/第\s*(\d+)\s*题/) ?? [, "0"];

    let formatInsertText = "";
    if (insertText) {
      formatInsertText = `${insertTitle}\n\n> 第 ${Number(number) + 1} 题：${insertText}\n\n<br>\n`;
    }
    if (insertTextArray.length > 0) {
      formatInsertText = insertTextArray.map((item, index) => `> 第 ${Number(number) + insertTextArray.length - index} 题：${item}`).join("\n");
      formatInsertText = `${insertTitle}\n\n${formatInsertText}\n\n<br>\n`;
    }

    if (data.includes(insertText)) {
      console.log("插入内容已存在，请勿重复插入。");
      return;
    }
    if (data.includes(getTodayDate())) {
      console.warn("日期已存在，建议每天输出不要太多。");
    }

    const lines = data.split("\n");

    lines.splice(insertLine, 0, formatInsertText);

    const updatedContent = lines.join("\n");

    fs.writeFileSync(filePath, updatedContent);

    console.log("更新CATALOG成功！");
  } catch (err) {
    console.error("操作出错:", err);
  }
}

function insertSidebarText({ filePath, title, insertTextArray = [] } = {}) {
  const data = fs.readFileSync(filePath, "utf-8");

  const lines = data.split("\n");
  const index = lines.findIndex((line) => line === title);

  if (index === -1) {
    lines.unshift(title, "", ...insertTextArray.map((item) => `  - ${item}`), "");
  } else {
    lines.splice(index + 2, 0, ...insertTextArray.map((item) => `  - ${item}`));
  }

  const updatedContent = lines.join("\n");

  fs.writeFileSync(filePath, updatedContent);

  console.log("更新_sidebar.md成功！");
}

function getCurrentFolder() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return __dirname;
}

function addSpaceBetweenChineseAndEnglish(text) {
  // 使用正则匹配中文字符与英文字符的分隔处
  return (
    text
      // 在中文和英文之间添加空格
      .replace(/([\u4e00-\u9fa5])([a-zA-Z])/g, "$1 $2")
      // 在英文和中文之间添加空格
      .replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, "$1 $2")
  );
}

main();
