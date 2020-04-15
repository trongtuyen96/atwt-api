<h1 align="center">
  <br>
  <a href="background"><img src="https://github.com/trongtuyen96/atwt-api/blob/master/ATWT_background.PNG" alt="background"></a>
    <a href="background"><img src="https://github.com/trongtuyen96/atwt-api/blob/master/rest_api.PNG" alt="background"></a>
  <br>
  ATWT Rest API
  <br>
</h1>

<h3 align="center" style="bold">An REST API for testing purpose using <a href="https://nodejs.org/en/">Nodejs</a>, <a href="https://expressjs.com/">Expressjs</a> and hosted on <a href="https://dashboard.heroku.com/">Heroku</a> with <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>. Document specification powered by SwaggerUI.</h3>


<h4 align="center">API Endpoints: http://atwt-api.herokuapp.com/
  <br>API docs: https://atwt-api.herokuapp.com/api-docs/</h4>

## Table of Contents

- [Endpoints](#endpoints)
- [How To Use](#how-to-use)
- [Author](#author)
- [License](#license)

## Endpoints
There are 6 endpoint groups available now:
1. User
   
   GET  /user : Get all users
   
   POST /user : Create a user
   
   GET  /user/{userId} : Get specific user
   
   GET  /user/{userId}/cars : Get cars of user
   
2. Car
   
   GET  /car : Get all cars
   
   POST /car : Create a car
   
   GET  /car/{carId} : Get specific car
   
   DELETE  /car/{carId} : Delete a car
   
3. Factory
   
   GET  /factory : Get all factories
   
   POST /factory : Create a factory
   
   GET  /factory/{factoryId} : Get specific factory
   
   GET  /factory/{factoryId}/foods : Get foods produced by factory
   
4. Food
   
   GET  /food : Get all foods
   
   POST /food : Create a food
   
   GET  /food/{foodId} : Get specific food
   
   DELETE  /food/{foodId} : Delete food

5. Zoo
   
   GET  /zoo : Get all zoos
   
   POST /zoo : Create a zoo
   
   GET  /zoo/{zooId} : Get specific zoo
   
   GET  /zoo/{zooId}/animals : Get animals live in zoo
   
6. Animal
   
   GET  /animal : Get all animals
   
   POST /animal : Create an animal
   
   GET  /animal/{animalId} : Get specific animal
   
   DELETE  /animal/{animalId} : Delete animal
   
## How to use
#### Direct request via base URL
e.g: To get all animals
```javascript
https://atwt-api.herokuapp.com/v1/animal
```

#### Manual execution via swaggerUI
Give it a try:
<h1 align="center">
  <a href="https://atwt-api.herokuapp.com/api-docs/"><img src="https://github.com/trongtuyen96/atwt-api/blob/master/api_docs_demo.PNG" alt="background"></a>
</h1>

## Author

<h4 align="center">
	Tuyen Nguyen - QA Automation Engineer
	</h4>
	<h5 align="center">
	<a href="trongtuyen96@gmail.com">trongtuyen96@gmail.com</a>
	</h5>
<p align="center">
	 <a alt="Github" href="https://github.com/trongtuyen96">
    <img src="https://user-images.githubusercontent.com/25218255/47360756-794c1f00-d6fa-11e8-86fa-7b1c2e4dda92.png" width="50">
  </a>
		 <a alt="LinkedIn" href="https://www.linkedin.com/in/tuyen-nguyen-trong-516a69121/">
    <img src="https://user-images.githubusercontent.com/25218255/47360366-8583ac80-d6f9-11e8-8871-219802a9a162.png" width="50">
  </a>
		 <a alt="Facebook" href="https://www.facebook.com/tuyen.trong.3">
    <img src="https://user-images.githubusercontent.com/25218255/47360363-84eb1600-d6f9-11e8-8029-818481536200.png" width="50">
  </a>
</p>

## License

~~~~
Copyright 2020 Tuyen Nguyen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
~~~~
