interface Row {
    'Message-ID': string
    Date: string;
    From: string;
    To: string;
    Subject: string;
    message: string;
  }
export default interface Email {
    _source : Row
  } 