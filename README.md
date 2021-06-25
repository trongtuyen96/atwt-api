<h1 align="center">
  <br>
  <a><img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/ATWT_background.PNG" alt="background"></a>
  <a><img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/rest_api.PNG" alt="rest api"></a>
  <br>
  ATWT Rest API
  <br>
</h1>

<h3 align="center" style="bold">An REST API for testing purpose using <a href="https://nodejs.org/en/">Nodejs</a>, <a href="https://expressjs.com/">Expressjs</a> and hosted on <a href="https://dashboard.heroku.com/">Heroku</a> with <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>. Document specification powered by SwaggerUI.</h3>


<h4 align="center">API Endpoints: http://atwt-api.herokuapp.com/
  <br>API docs: https://atwt-api.herokuapp.com/api-docs/</h4>

## Table of Contents
- [Changelogs](#changelogs)
- [Endpoints](#endpoints)
- [How To Use](#how-to-use)
- [Author](#author)
- [License](#license)

## Changelogs
- Update 26/06/2021: Add GET methods with multiple conditions for all endpoints (Swagger docs updated)
- Update 25/06/2021: Add GET methods with multiple conditions
- Update 24/06/2021: Add PUT methods for objects

## Endpoints
There are 6 endpoint groups available now:
1. User

   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /user : Get users with condition
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60">  /user : Create a user
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60">  /user : Update existing user
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /user/{userId} : Get specific user
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /user/{userId} : Delete a user - Disabled
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /user/{userId}/cars : Get cars of user
   
2. Car
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /car : Get all cars
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60"> /car : Create a car
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60"> /car : Update existing car
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /car/{carId} : Get specific car
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /car/{carId} : Delete a car
   
3. Factory
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /factory : Get all factories
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60"> /factory : Create a factory
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60"> /factory : Update existing factory
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /factory/{factoryId} : Get specific factory
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /factory/{factoryId} : Delete a factory - Disabled
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /factory/{factoryId}/foods : Get foods produced by factory
   
4. Food
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /food : Get all foods
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60"> /food : Create food
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60"> /food : Update food
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /food/{foodId} : Get specific food
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /food/{foodId} : Delete food

5. Zoo
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /zoo : Get all zoos
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60"> /zoo : Create a zoo
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60"> /zoo : Update a zoo
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /zoo/{zooId} : Get specific zoo
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /zoo/{zooId} : Delete a zoo - Disabled
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /zoo/{zooId}/animals : Get animals live in zoo
   
6. Animal
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /animal : Get all animals
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/post_badge.PNG" width="60"> /animal : Create an animal
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/put_badge.PNG" width="60"> /animal : Update an animal
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/get_badge.PNG" width="60">  /animal/{animalId} : Get specific animal
   
   <img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/delete_badge.PNG" width="60">  /animal/{animalId} : Delete animal
   
## How to use
#### Direct request via base URL
e.g: To get all animals
```javascript
https://atwt-api.herokuapp.com/v1/animal
```

#### Manual execution via swaggerUI
Give it a try:
<h1 align="center">
  <a href="https://atwt-api.herokuapp.com/api-docs/"><img src="https://github.com/trongtuyen96/atwt-api/blob/master/covers/api_docs_demo.PNG" alt="background"></a>
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
		 <a alt="LinkedIn" href="https://www.linkedin.com/in/tuyennguyen96/">
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
