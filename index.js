// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  veto() {
    return "NO!";
  };

  passBill() {
    console.log("You can do that!");
  };

  doCharity() {
    console.log("I like to help people.")
  };

  conductPressInterview() {
    console.log("I am proud to be an American.")
  };

  sayHi() {
    console.log(`Hi, my name is ${name}. I am from ${homestate}.  I represent the ${politicalParty}s, and was in office ${yearsInOffice}.`)
  }
}
