export default class Team {
  constructor(members = []) {
    this.members = Array.isArray(members) ? members : [];
  }
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }

}
