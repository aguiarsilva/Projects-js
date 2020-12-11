const menu = { 
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizer) {
      this._courses.appetizers.push(appetizer);
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains.push(mains);
    },
    get desserts(){
      return this._courses.desserts;
    },
    set desserts(desserts){
      this._courses.desserts.push(desserts);
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
  
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`; 
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Spinach Gnocchi', 9.25);
  menu.addDishToCourse('desserts', 'Fruit Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Caprese Salad', 4.25);
  menu.addDishToCourse('mains', 'Cheese Gnocchi', 9.25);
  menu.addDishToCourse('desserts', 'Lemon Salad', 5.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);