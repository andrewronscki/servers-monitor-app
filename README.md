## How to start node project with <a href="https://www.npmjs.com/package/@rocketseat/omni-cli">@omni-cli</a>

### install <a href="https://nodejs.org/en/">Node.js</a>
### omni init {package_name} --only=server
### <strong><a href="https://yarnpkg.com/lang/en/">yarn</a><strong> dev or npm run dev
### docker run --name {container_name} -p 27017:27017 -d -t mongo
### create controller
### change route
### yarn add mongoose
### integration with api
```javascript
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
### create model
```javascript
import { Schema, model } from 'mongoose';

const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default model('Languages', LanguageSchema);
```
### integration model in controller 
### create function index and store
### create call tests in Insomnia or Postman

