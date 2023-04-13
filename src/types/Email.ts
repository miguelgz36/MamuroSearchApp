interface Row {
  from: string;
  to: string;
  subject: string;
  message: string;
}
export default interface Email {
  _source: Row
} 