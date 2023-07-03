class User {
    constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
}
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
          return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
          return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
          return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
      }
    }
    
    const user1 = new User("Mario", "Rossi", 30, "Milano");
    const user2 = new User("Luigi", "Verdi", 25, "Roma");
    console.log(user1.compareAge(user2));
  
    const user3 = new User("Mario", "Rossi", 50, "Milano");
    const user4 = new User("Luigi", "Verdi", 50, "Roma");
    console.log(user3.compareAge(user4));
  
    const user5 = new User("Mario", "Rossi", 40, "Milano");
    const user6 = new User("Luigi", "Verdi", 50, "Roma");
    console.log(user5.compareAge(user6));
    
    class Pet {
      constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
      }
      sameOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
          return true;
        } else {
          return false;
        }
      }
    }
    
    const pet1 = new Pet("Fido", "Mario Rossi", "cane", "labrador");
    const pet2 = new Pet("Micio", "Luigi Verdi", "gatto", "soriano");
    const pet3 = new Pet("Bugs Bunny", "Paolo Bianchi", "coniglio", "nano");
    console.log(pet1.sameOwner(pet2));
    console.log(pet1.sameOwner(pet3));
    console.log(pet2.sameOwner(pet3));
    
  
  function createPet(event) {
      event.preventDefault();
      
      const petName = document.getElementById("petName").value;
      const ownerName = document.getElementById("ownerName").value;
      const species = document.getElementById("species").value;
      const breed = document.getElementById("breed").value;
      
      const pet = new Pet(petName, ownerName, species, breed);
      
      const petList = document.getElementById("petList");
      
      const li = document.createElement("li");
      li.textContent = `${pet.petName} (${pet.species}) - proprietario: ${pet.ownerName}`;
      
      petList.appendChild(li);
    }
