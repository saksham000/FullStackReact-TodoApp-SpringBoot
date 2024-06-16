const person = {
  name: "Saksham Sharma",
  address: {
    line1: "123 GTB Nagar",
    city: "Ludhiana",
    country: "India",
  },

  hobbies: ["Coding", "Reading", "Gaming"],

  printHobbies: () => {
    person.hobbies.map((hobbies) => console.log(hobbies));

    // console.log(person.hobbies[1])
  },
};

export default function LearningJavaScript() {
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      {/* <div>{person.hobbies[2]}</div> */}
      <div>{person.printHobbies()}</div>
    </div>
  );
}
