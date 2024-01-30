
class Log {
  private RE = "\x1b[0m";
  private BL = "\x1b[30m";
  private R = "\x1b[31m";
  private G = "\x1b[32m";
  private Y = "\x1b[33m";
  private B = "\x1b[34m";
  private M = "\x1b[35m";
  private C = "\x1b[36m";
  private W = "\x1b[37m";

  info = (message: string) => console.log(`${this.Y}[INFO] ${this.RE}${message}`);
  error = (message: string) => console.log(`${this.R}[ERROR] ${this.RE}${message}`);
  success = (message: string) => console.log(`${this.G}[SUCCESS] ${this.RE}${message}`);
  warning = (message: string) => console.log(`${this.Y}[WARNING] ${this.RE}${message}`);
  debug = (message: string) => console.log(`${this.B}[DEBUG] ${this.RE}${message}`);
  log = (message: string) => console.log(`${this.W}[LOG] ${this.RE}${message}`);
}

export default Log;
