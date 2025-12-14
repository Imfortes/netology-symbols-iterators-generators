export default class Team {
  constructor(members = []) {
    this.members = Array.isArray(members) ? members : [];
  }
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }


  [Symbol.iterator]() {
    let index = 0;
    const members = this.members;

    return {
      next() {
        if (index < members.length) {
          return { value: members[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}
