class Formatter {
  constructor($string) {
    this.str = $string;

    this.formatUrl();
    this.formatEmail();
    this.formatPhoneNumber();

    return this.str;
  }

  formatUrl() {
    return this.str;
  }

  formatEmail() {
    return this.str;
  }

  formatPhoneNumber() {
    return this.str;
  }
}

export default Formatter;
