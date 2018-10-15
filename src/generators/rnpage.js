import assert from "assert";
import ejs from "ejs";
import uppercamelcase from "uppercamelcase";
import { join, basename } from "path";
import { existsSync, statSync, readFileSync, writeFileSync } from "fs";
import { outputFileSync } from "fs-extra";

function directoryExists(path) {
  return existsSync(path) && statSync(path).isDirectory();
}

function fileExists(path) {
  return existsSync(path) && statSync(path).isFile();
}

function stripEmptyLine(content) {
  const ret = content
    .trim()
    // 两行 -> 一行
    .replace(/\n\n/g, "\n");

  // 结尾空行
  return `${ret}\n`;
}

export default function(opts = {}) {
  const { file } = opts;
  assert(
    !("isDirectory" in opts) || typeof opts.isDirectory === "boolean",
    "opts.isDirectory should be boolean"
  );
  assert(
    !("useClass" in opts) || typeof opts.useClass === "boolean",
    "opts.useClass should be boolean"
  );
  const isDirectory = opts.isDirectory || true;
  
  const cwd = opts.cwd || process.cwd();

  console.log(`generate rn index ${file}`);

  let jsTargetPath;
  let modelTargetPath;
  let serviceTargetPath;
  let cjsTargetPath;

  if (isDirectory) {
    assert(
      !directoryExists(join(cwd, "src", "pages", file)),
      `directory src/index/${file} exists`
    );
    jsTargetPath = join(cwd, "src", "pages", file, "index.js");
    modelTargetPath = join(cwd, "src", "pages", file, "models", `${file}.js`);
    serviceTargetPath = join(
      cwd,
      "src",
      "pages",
      file,
      "services",
      `${file}.js`
    );
    cjsTargetPath = join(cwd, "src", "pages", file, "components", `Button.js`);
      
  } else {
    jsTargetPath = join(cwd, "src", "pages", `${file}.js`);
  }

  assert(!fileExists(jsTargetPath), `file src/index/${file} exists`);
  assert(!fileExists(modelTargetPath), `file src/index/${file} exists`);
  assert(!fileExists(serviceTargetPath), `file src/index/${file} exists`);
  assert(!fileExists(cjsTargetPath), `file src/index/${file} exists`);

  const jsTpl = readFileSync(
    join(__dirname, "../../template-n/example/index.js"),
    "utf-8"
  );
  
  const sTpl = readFileSync(
    join(__dirname, "../../template-n/example/services/haha.js"),
    "utf-8"
  );
  const mTpl = readFileSync(
    join(__dirname, "../../template-n/example/models/haha.js"),
    "utf-8"
  );
  const cjTpl = readFileSync(
    join(__dirname, "../../template-n/example/components/Button.js"),
    "utf-8"
  );

  const fileName = basename(file);
  const jsContent = ejs.render(
    jsTpl,
    {
      fileName
    },
    {
      _with: false,
      localsName: "oni"
    }
  );

  const mContent = ejs.render(
    mTpl,
    {fileName},
    {
      _with: false,
      localsName: "oni"
    }
  );

  outputFileSync(jsTargetPath, stripEmptyLine(jsContent), "utf-8");
  outputFileSync(serviceTargetPath, sTpl, "utf-8");
  outputFileSync(modelTargetPath, stripEmptyLine(mContent), "utf-8");
  outputFileSync(cjsTargetPath, cjTpl, "utf-8");
} 

