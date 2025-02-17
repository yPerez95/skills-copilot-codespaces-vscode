function skillsMember() {
  let skills = ['HTML', 'CSS', 'JavaScript'];
  let name = 'John';

  function showSkills() {
    console.log(skills);
  }

  function showName() {
    console.log(name);
  }

  return {
    showSkills: showSkills,
    showName: showName
  };
}